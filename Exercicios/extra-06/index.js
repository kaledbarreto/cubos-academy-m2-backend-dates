function taComPromo(promocao, momento) {
  const validade = +promocao + 1000 * 60 * 60 * 24
  if (validade > momento) {
    console.log("True");
  } else {
    console.log("False");
  }
}

taComPromo(new Date(2021, 07, 07,), new Date(2021, 07, 07, 23));