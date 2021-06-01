var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Leitura = require('../models').Leitura;
var env = process.env.NODE_ENV || 'development';


/* Recuperar as últimas N leituras */
router.get('/ultimas/:idJogador', function(req, res, next) {

    // quantas são as últimas leituras que quer? 7 está bom?
    const limite_linhas = 1;

    var idJogador = req.params.idJogador;

    console.log(`Recuperando as ultimas ${limite_linhas} leituras`);

    let instrucaoSql = "";

    if (env == 'dev') {
        // abaixo, escreva o select de dados para o Workbench
        instrucaoSql = `select 
		nomeJogador, 
		posicao, 
		idade,
		camisa,
		nacionalidade,
		from jogador
		where fkJogador = ${idJogador}`;

    } else if (env == 'production') {
        // abaixo, escreva o select de dados para o SQL Server
        instrucaoSql = `select 
		nomeJogador, 
		posicao, 
		idade,
		camisa,
		nacionalidade,
		from jogador
		where fkJogador = ${idJogador}`;
    } else {
        console.log("\n\n\n\nVERIFIQUE O VALOR DE LINHA 1 EM APP.JS!\n\n\n\n")
    }

    sequelize.query(instrucaoSql, {
            model: Leitura,
            mapToModel: true
        })
        .then(resultado => {
            console.log(`Encontrados: ${resultado.length}`);
            res.json(resultado);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});


router.get('/tempo-real/:idcaminhao', function(req, res, next) {
    console.log('Recuperando caminhões');

    //var idcaminhao = req.body.idcaminhao; // depois de .body, use o nome (name) do campo em seu formulário de login
    var idcaminhao = req.params.idcaminhao;

    let instrucaoSql = "";

    if (env == 'dev') {
        // abaixo, escreva o select de dados para o Workbench
        instrucaoSql = `select * from jogador where usuario.fkJogador = ${idJogador}`;
    } else if (env == 'production') {
        // abaixo, escreva o select de dados para o SQL Server
        instrucaoSql = `select top 1 temperatura, umidade, FORMAT(momento,'HH:mm:ss') as momento_grafico, fkcaminhao from leitura where fkcaminhao = ${idcaminhao} order by id desc`;
    } else {
        console.log("\n\n\n\nVERIFIQUE O VALOR DE LINHA 1 EM APP.JS!\n\n\n\n")
    }

    console.log(instrucaoSql);

    sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
        .then(resultado => {
            res.json(resultado[0]);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});

// estatísticas (max, min, média, mediana, quartis etc)
router.get('/estatisticas', function(req, res, next) {

    console.log(`Recuperando as estatísticas atuais`);

    const instrucaoSql = `select 
							max(temperatura) as temp_maxima, 
							min(temperatura) as temp_minima, 
							avg(temperatura) as temp_media,
							max(umidade) as umidade_maxima, 
							min(umidade) as umidade_minima, 
							avg(umidade) as umidade_media 
						from leitura`;


    sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
        .then(resultado => {
            res.json(resultado[0]);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });

});

/* Recuperar os jogadores mais votados */
router.get('/favorito', function(req, res, next) {

    console.log(`Recuperando os jogadores favoritos`);
    if (env == 'dev') {

        var instrucaoSql = `select fkJogador as jogFav,count(*) as count from usuario group by fkJogador order by count desc limit 1;`;
    } else if (env == 'production') {

        var instrucaoSql = `select fkJogador as jogFav,count(*) as count from usuario group by fkJogador order by count desc limit 1;`;
    }


    sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
        .then(resultado => {
            res.json(resultado[0]);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });

});
module.exports = router;