let pasion = document.querySelector(".pasion");
let pasionTexto = document.querySelector("#pasion");
let estudios = document.querySelector(".estudios");
let estudiosTexto = document.querySelector("#estudios");
let habilidades = document.querySelector(".habilidades");
let habilidadesTexto = document.querySelector("#habilidades");
let liderazgo = document.querySelector(".liderazgo");
let liderazgoTexto = document.querySelector("#liderazgo");
let valores = document.querySelector(".valores");
let valoresTexto = document.querySelector("#valores");
let actualidad = document.querySelector(".actualidad");
let actualidadTexto = document.querySelector("#actualidad");


pasion.addEventListener("click", () => {
	pasionTexto.classList.add("block");
	pasion.classList.add("opacity");
	pasion.classList.remove("opacity-1");

	estudiosTexto.classList.add("none");
	estudios.classList.add("opacity-1");
	estudiosTexto.classList.remove("block");
	estudios.classList.remove("opacity");

	habilidadesTexto.classList.add("none");
	habilidades.classList.add("opacity-1");
	habilidadesTexto.classList.remove("block");
	habilidades.classList.remove("opacity");

	liderazgoTexto.classList.add("none");
	liderazgo.classList.add("opacity-1");
	liderazgoTexto.classList.remove("block");
	liderazgo.classList.remove("opacity");

	valoresTexto.classList.add("none");
	valores.classList.add("opacity-1");
	valoresTexto.classList.remove("block");
	valores.classList.remove("opacity");

	actualidadTexto.classList.add("none");
	actualidad.classList.add("opacity-1");
	actualidadTexto.classList.remove("block");
	actualidad.classList.remove("opacity");
});

estudios.addEventListener("click", () => {
	pasionTexto.classList.add("none");
	pasion.classList.add("opacity-1");
	pasionTexto.classList.remove("block");
	pasion.classList.remove("opacity");

	estudiosTexto.classList.add("block");
	estudios.classList.add("opacity");
	estudios.classList.remove("opacity-1");

	habilidadesTexto.classList.add("none");
	habilidades.classList.add("opacity-1");
	habilidadesTexto.classList.remove("block");
	habilidades.classList.remove("opacity");

	liderazgoTexto.classList.add("none");
	liderazgo.classList.add("opacity-1");
	liderazgoTexto.classList.remove("block");
	liderazgo.classList.remove("opacity");

	valoresTexto.classList.add("none");
	valores.classList.add("opacity-1");
	valoresTexto.classList.remove("block");
	valores.classList.remove("opacity");

	actualidadTexto.classList.add("none");
	actualidad.classList.add("opacity-1");
	actualidadTexto.classList.remove("block");
	actualidad.classList.remove("opacity");
});

habilidades.addEventListener("click", () => {
	pasionTexto.classList.add("none");
	pasion.classList.add("opacity-1");
	pasionTexto.classList.remove("block");
	pasion.classList.remove("opacity");

	estudiosTexto.classList.add("none");
	estudios.classList.add("opacity-1");
	estudiosTexto.classList.remove("block");
	estudios.classList.remove("opacity");

	habilidadesTexto.classList.add("block");
	habilidades.classList.add("opacity");
	habilidades.classList.remove("opacity-1");

	liderazgoTexto.classList.add("none");
	liderazgo.classList.add("opacity-1");
	liderazgoTexto.classList.remove("block");
	liderazgo.classList.remove("opacity");

	valoresTexto.classList.add("none");
	valores.classList.add("opacity-1");
	valoresTexto.classList.remove("block");
	valores.classList.remove("opacity");

	actualidadTexto.classList.add("none");
	actualidad.classList.add("opacity-1");
	actualidadTexto.classList.remove("block");
	actualidad.classList.remove("opacity");
});

liderazgo.addEventListener("click", () => {
	pasionTexto.classList.add("none");
	pasion.classList.add("opacity-1");
	pasionTexto.classList.remove("block");
	pasion.classList.remove("opacity");

	estudiosTexto.classList.add("none");
	estudios.classList.add("opacity-1");
	estudiosTexto.classList.remove("block");
	estudios.classList.remove("opacity");

	habilidadesTexto.classList.add("none");
	habilidades.classList.add("opacity-1");
	habilidadesTexto.classList.remove("block");
	habilidades.classList.remove("opacity");

	liderazgoTexto.classList.add("block");
	liderazgo.classList.add("opacity");
	liderazgo.classList.remove("opacity-1");

	valoresTexto.classList.add("none");
	valores.classList.add("opacity-1");
	valoresTexto.classList.remove("block");
	valores.classList.remove("opacity");

	actualidadTexto.classList.add("none");
	actualidad.classList.add("opacity-1");
	actualidadTexto.classList.remove("block");
	actualidad.classList.remove("opacity");
});


valores.addEventListener("click", () => {
	pasionTexto.classList.add("none");
	pasion.classList.add("opacity-1");
	pasionTexto.classList.remove("block");
	pasion.classList.remove("opacity");

	estudiosTexto.classList.add("none");
	estudios.classList.add("opacity-1");
	estudiosTexto.classList.remove("block");
	estudios.classList.remove("opacity");

	habilidadesTexto.classList.add("none");
	habilidades.classList.add("opacity-1");
	habilidadesTexto.classList.remove("block");
	habilidades.classList.remove("opacity");

	liderazgoTexto.classList.add("none");
	liderazgo.classList.add("opacity-1");
	liderazgoTexto.classList.remove("block");
	liderazgo.classList.remove("opacity");

	valoresTexto.classList.add("block");
	valores.classList.add("opacity");
	valores.classList.remove("opacity-1");

	actualidadTexto.classList.add("none");
	actualidad.classList.add("opacity-1");
	actualidadTexto.classList.remove("block");
	actualidad.classList.remove("opacity");
});

actualidad.addEventListener("click", () => {
	pasionTexto.classList.add("none");
	pasion.classList.add("opacity-1");
	pasionTexto.classList.remove("block");
	pasion.classList.remove("opacity");

	estudiosTexto.classList.add("none");
	estudios.classList.add("opacity-1");
	estudiosTexto.classList.remove("block");
	estudios.classList.remove("opacity");

	habilidadesTexto.classList.add("none");
	habilidades.classList.add("opacity-1");
	habilidadesTexto.classList.remove("block");
	habilidades.classList.remove("opacity");

	liderazgoTexto.classList.add("none");
	liderazgo.classList.add("opacity-1");
	liderazgoTexto.classList.remove("block");
	liderazgo.classList.remove("opacity");

	valoresTexto.classList.add("none");
	valores.classList.add("opacity-1");
	valoresTexto.classList.remove("block");
	valores.classList.remove("opacity");

	actualidadTexto.classList.add("block");
	actualidad.classList.add("opacity");
	actualidad.classList.remove("opacity-1");
});
