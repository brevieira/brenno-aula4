let videogame = [
	{
		img:'https://leagueoftheundead.com/renders/previews/1380.png',
		titulo:'John Price',
		paragrafo:'personagem do jogo CALL OF DUTY',
	},
	{
		img:'https://i.pinimg.com/originals/68/c0/7f/68c07fe236b1b2a3a7548735eb629ae1.png',
		titulo:'arthur morgan',
		paragrafo:'personagem do jogo RED DEAD REDEMPTION 2',
	},
	{
		img:'https://i-love-png.com/images/975b0c8d9d13c994fb31b5387442e117.png',
		titulo:'cleiton',
		paragrafo:'personagem do jogo GODE UF UAR',
	},
	{
		img:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/178d09c8-fd53-4dab-88d1-682e2a8c2610/d953p36-ae3bcd76-e969-4009-a85a-70bb8925a4d6.png/v1/fill/w_780,h_1025,strp/grand_theft_auto_v_michael_with_money_4k_render_by_eduard2009_d953p36-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE4MiIsInBhdGgiOiJcL2ZcLzE3OGQwOWM4LWZkNTMtNGRhYi04OGQxLTY4MmUyYThjMjYxMFwvZDk1M3AzNi1hZTNiY2Q3Ni1lOTY5LTQwMDktYTg1YS03MGJiODkyNWE0ZDYucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.17Y5ibXVR-YWn6SUN-PpQllAjHRWMmST0kyiHfh8Xg8',
		titulo:'Michael De Santa',
		paragrafo:'personagem do jogo GRAND THEFT AUTO V',
	},
	{
		img:'https://progameguides.com/wp-content/uploads/2019/08/fortnite-skin-catalyst-featured.png',
		titulo:'irineu',
		paragrafo:'personagem do jogo FORTNITE',
	}
]

let games = document.getElementById('img')
console.log(games)
let contador =0
let esquerda = document.getElementById('esquerda')
let direita = document.getElementById('direita')
let titulo = document.getElementById('titulo')
let paragrafo = document.getElementById('paragrafo')

esquerda.addEventListener('click', function(){
	if (contador>0) {
		console.log('clicou')
			contador=contador-1
			games.setAttribute('src',videogame[contador].img)
			titulo.innerHTML = videogame[contador].titulo
			paragrafo.innerHTML = videogame[contador].paragrafo
	}
	else{
			contador=4
			games.setAttribute('src',videogame[contador].img)
			titulo.innerHTML = videogame[contador].titulo
			paragrafo.innerHTML = videogame[contador].paragrafo
	}
})
direita.addEventListener('click', function(){
	if (contador<4) {
		console.log('clicou')
			contador=contador+1
			games.setAttribute('src',videogame[contador].img)
			titulo.innerHTML = videogame[contador].titulo
			paragrafo.innerHTML = videogame[contador].paragrafo
	}
	else{
			contador=0
			games.setAttribute('src',videogame[contador].img)
			titulo.innerHTML = videogame[contador].titulo
			paragrafo.innerHTML = videogame[contador].paragrafo
	}
})