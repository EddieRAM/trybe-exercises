let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

for (let keys in info) {
  info.personagem = 'Tio Patinhas';
  info.origem = "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178";
  info.nota = "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas";
  info.recorrente = "Ambos recorrentes";
  console.table(info)
}