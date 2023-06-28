export function verificaCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

  if (cnpj.length !== 14) {
    return false; // CNPJ deve ter 14 dígitos
  }

  // Verificação do primeiro dígito verificador
  let soma = 0;
  let peso = 2;

  for (let i = 11; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = peso === 9 ? 2 : peso + 1;
  }

  let resto = soma % 11;
  let digitoVerificador = resto < 2 ? 0 : 11 - resto;

  if (parseInt(cnpj.charAt(12)) !== digitoVerificador) {
    return false; // CNPJ inválido
  }

  // Verificação do segundo dígito verificador
  soma = 0;
  peso = 2;

  for (let i = 12; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = peso === 9 ? 2 : peso + 1;
  }

  resto = soma % 11;
  digitoVerificador = resto < 2 ? 0 : 11 - resto;

  if (parseInt(cnpj.charAt(13)) !== digitoVerificador) {
    return false; // CNPJ inválido
  }

  return true; // CNPJ válido
}
