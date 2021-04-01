import React from 'react';
import { Container } from '../../components';


export default function Orderpage () {

return(
<>
<Container>
<h1>Cadastro de Contas</h1>

<form>
<div>
<input type="number" placeholder="Valor" id="valor" />
</div>

<div>
<label for="tipo">Tipo:</label>

<select name="tipo" id="tipo">
<option value="">Selecione...</option>
<option value="Despesa">Despesa</option>
<option value="Receita">Receita</option>
</select>
</div>

<div>
<input type="checkbox" value="paga" id="paga" />
<label for="paga">Paga?</label>
</div>

<div>
<label for="receptor">Receptor:</label>

<select name="receptor" id="receptor">
<option value="">Selecione...</option>
</select>
</div>

<div class="meio">
<button type="button" onclick="contasController.salvar()">
Salvar
</button>
<button type="button" onclick="contasController.cancelar()">
Cancelar
</button>
</div>
</form>
<div class="div-tabela">
<table class="tabela">
<thead>
<th>Valor</th>
<th>Tipo</th>
<th>Paga?</th>
<th>Receptor</th>
<th>Editar</th>
<th>Apagar</th>

</thead>

<tbody id="tabela-corpo"></tbody>
</table>
</div>
</Container>
</>
);  
}