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
(null,'Alisson','MEI',

select * from usuario;