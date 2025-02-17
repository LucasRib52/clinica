import React, { useState } from "react";
import "./Taxas.css";

const Taxas = () => {
  const [valorLiquido, setValorLiquido] = useState("");
  const [valorBruto, setValorBruto] = useState(0);
  const [valorJuros, setValorJuros] = useState(0);
  const taxas = [
    { parcelas: "Crédito à vista", taxa: 4.49 },
    { parcelas: "2x", taxa: 5.91 },
    { parcelas: "3x", taxa: 6.98 },
    { parcelas: "4x", taxa: 8.05 },
    { parcelas: "5x", taxa: 9.12 },
    { parcelas: "6x", taxa: 10.19 },
    { parcelas: "7x", taxa: 11.31 },
    { parcelas: "8x", taxa: 12.38 },
    { parcelas: "9x", taxa: 13.45 },
    { parcelas: "10x", taxa: 14.52 },
    { parcelas: "11x", taxa: 15.59 },
    { parcelas: "12x", taxa: 16.66 },
  ];
  const [taxaSelecionada, setTaxaSelecionada] = useState(taxas[0].taxa);

  const calcular = () => {
    const valor = parseFloat(valorLiquido);
    if (isNaN(valor) || valor <= 0) {
      alert("Por favor, insira um valor válido.");
      return;
    }

    const taxa = taxaSelecionada / 100;
    const bruto = valor / (1 - taxa);
    const juros = bruto - valor;

    setValorBruto(bruto.toFixed(2));
    setValorJuros(juros.toFixed(2));
  };

  return (
    <div className="container-taxas">
      <h2>Simulador de Taxa</h2>

      <label>Valor Líquido (R$):</label>
      <input
        type="number"
        value={valorLiquido}
        onChange={(e) => setValorLiquido(e.target.value)}
        placeholder="Digite o valor líquido"
        step="0.01"
      />

      <label>Escolha o parcelamento:</label>
      <select onChange={(e) => setTaxaSelecionada(parseFloat(e.target.value))}>
        {taxas.map((item, index) => (
          <option key={index} value={item.taxa}>
            {item.parcelas} ({item.taxa}%)
          </option>
        ))}
      </select>

      <button onClick={calcular}>Calcular</button>

      <div className="result">
        <p>Valor Bruto: R$ <span>{valorBruto}</span></p>
        <p>Valor do Juros: R$ <span>{valorJuros}</span></p>
        <p>Valor Líquido: R$ <span>{valorLiquido}</span></p>
      </div>
    </div>
  );
};

export default Taxas;
