

const form = document.getElementById('vetForm');
const output = document.getElementById('output');
const btnExport = document.getElementById('btnExport');


function clearErrors(){
['nome','especie','raca','idade','sexo'].forEach(id=>{
const el = document.getElementById('err-'+id);
if(el) el.textContent = '';
});
}


function validate(data){
clearErrors();
let ok = true;
if(!data.nome || data.nome.trim().length < 1){ document.getElementById('err-nome').textContent = 'Informe o nome do animal.'; ok=false }
if(!data.especie){ document.getElementById('err-especie').textContent = 'Selecione a espécie.'; ok=false }
if(!data.raca || data.raca.trim().length<1){ document.getElementById('err-raca').textContent = 'Informe a raça.'; ok=false }
if(data.idade === '' || data.idade === null || isNaN(Number(data.idade)) || Number(data.idade) < 0){ document.getElementById('err-idade').textContent = 'Idade inválida.'; ok=false }
if(!data.sexo){ document.getElementById('err-sexo').textContent = 'Selecione o sexo.'; ok=false }
return ok;
}


function gatherForm(){
const formData = new FormData(form);
const especie = formData.get('especie');
const sexo = formData.get('sexo');
return {
nome: formData.get('nome') || '',
especie: especie || '',
raca: formData.get('raca') || '',
idade: formData.get('idade') || '',
sexo: sexo || '',
castrado: formData.get('castrado') === 'on' || document.getElementById('castrado').checked,
cor: formData.get('cor') || '',
observacoes: formData.get('observacoes') || '',
criadoEm: new Date().toISOString()
};
}


function showResult(data){
output.innerHTML = '';
const box = document.createElement('div');
box.className = 'result-wrapper';
const pre = document.createElement('pre');
pre.className = 'result';
pre.textContent = JSON.stringify(data, null, 2);
box.appendChild(pre);
output.appendChild(box);
}


form.addEventListener('submit', (e)=>{
e.preventDefault();
const data = gatherForm();
if(!validate(data)) return;
showResult(data);


});


btnExport.addEventListener('click', ()=>{
const data = gatherForm();
if(!validate(data)) return;
const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json;charset=utf-8'});
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = (data.nome ? data.nome.replace(/\s+/g,'_') : 'ficha_animal') + '.json';
document.body.appendChild(a);
a.click();
a.remove();
URL.revokeObjectURL(url);
});

document.getElementById("nextStep").addEventListener("click", () => {
  const data = gatherForm();
  if(!validate(data)) return;
window.location.href = '../inform/inform.html';
});



