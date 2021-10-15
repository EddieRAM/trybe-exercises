SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1 AS 'Column 1', 2 AS 'Column 2', 3 AS 'Column 3';
SELECT 10+15;
SELECT 7*7+7/7;
SELECT * FROM Scientists.Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
SELECT Name FROM Scientists.Scientists ORDER BY Name ASC;
SELECT Name FROM Scientists.Projects ORDER BY Name ASC;
SELECT CONCAT('O projeto ',Name, ' precisou de ', Hours, ' para ser concluído.') AS 'Duração dos Projetos' FROM Scientists.Projects;
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3; 

 