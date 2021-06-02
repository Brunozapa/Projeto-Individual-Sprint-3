create database meu_santos;
use meu_santos;

create table jogador (
idJogador int primary key auto_increment not null,
nomeJogador varchar(40),
posicao varchar(11),
check (posicao = 'atacante' or posicao = 'meio' or posicao = 'defensor' or posicao = 'goleiro'),
idade int,
camisa int,
nacionalidade varchar(15)
) auto_increment = 1;

create table socio (
idSocio int primary key not null,
plano varchar (5),
check (plano = 'silver' or plano = 'gold' or plano = 'black')
);

create table usuario (
idUsuario int primary key auto_increment not null,
primeiroNome varchar(20),
segundoNome varchar(40),
email varchar (40),
senha varchar(20),
aniversario date,
pais varchar(20),
cidade varchar(40),
idioma varchar(10),
check (idioma = 'ingles' or idioma = 'portugues' or idioma = 'espanhol'),
fkJogador int,
foreign key (fkJogador) references jogador(idJogador),
fkSocio int,
foreign key (fkSocio) references socio(idSocio)
) auto_increment = 100;

insert into jogador values 
(null, 'Alisson', 'meio-campista', 28,5,'Brasil'),
(null,'Angelo','atacante',16,27,'Brasil'),
(null,'V. Balieiro','meio-campista',21,17,'Brasil'),
(null,'Copete','atacante',33,16,'Colombia'),
(null,'Felipe Jonatan','defensor',23,2,'Brasil'),
(null,'John','goleiro',25,31,'Brasil'),
(null,'João Paulo','goleiro',25,34,'Brasil'),
(null,'Kaiky','defensor',17,28,'Brasil'),
(null,'Luan Peres','defensor',26,14,'Brasil'),
(null,'Lucas Braga','atacante',25,30,'Brasil'),
(null,'Lucas Lourenço','meio-campista',20,37,'Brasil'),
(null,'Marcos Leonardo','meio-campista',18,36,'Brasil'),
(null,'Madson','defensor',29,13,'Brasil'),
(null,'Marinho','atacante',30,11,'Brasil'),
(null,'Pará','defensor',35,4,'Brasil'),
(null,'G. Pirani','meio-campista',19,20,'Brasil'),
(null,'Carlos Sanchez','meio-campista',36,7,'Uruguai'),
(null,'Sandry','meio-campista',18,38,'Brasil'),
(null,'Kaio Jorge','atacante',19,9,'Brasil');


select * from usuario;

select fkJogador as jogFav ,count(*) as cont from usuario group by fkJogador order by cont desc limit 1;

select * from jogador;

insert into usuario (fkJogador) values 
(2),(2),(2),(3),(4),(4),(12),(12),(15),(15),(15),(15),(15),(15),(15),(15);
