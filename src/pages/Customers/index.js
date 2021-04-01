import React from 'react';
import { Container } from '../../components';
export default function Customers() {
  return (
    <>
    <Container>
      <h1>Cadastro de Empresas</h1>
      <form>
        <div>
          <input type="text" placeholder="Nome" id="nome" />
        </div>
        <div>
          <input type="text" placeholder="Endereco" id="endereco" />
        </div>
        <div>
          <input type="text" placeholder="CNPJ" id="cnpj" />
        </div>
        <div>
          <input type="text" placeholder="Razão Social" id="razaoSocial" />
        </div>
        <div class="meio">
          <button type="button" onclick="empresasController.salvar()">
            Salvar
          </button>
        </div>

        <div class="meio">
          <button type="button" onclick="empresasController.cancelar()">
            Cancelar
          </button>
        </div>
      </form>
      <div class="div-tabela">
        <table class="tabela">
          <thead>
            <th>Nome</th>
            <th>Endereço</th>
            <th>CNPJ</th>
            <th>Razão Social</th>
            <th>Editar/</th>
            <th>Desativar</th>
          </thead>
          <tbody id="tabela-corpo"></tbody>
        </table>
      </div>
    </Container>
    </>
  );
}
