<template>
	<div class="columns">
		<div class="column"></div>
		<div class="column login">
			<form >
				<img class="logolog" src='../assets/plogin.jpg'>
				<h2 class="titlelog"><b>REGISTRO ESTACIÓN PLATZI</b></h2>
				<input class="input is-warning" type="text" placeholder="Nombre" name="nombre">
				<input class="input is-warning" type="text" placeholder="Apellido" name="apellido">
				<input class="input is-warning" type="text" placeholder="Cargo" name="cargo">
				<a class="button is-link is-pulled-right">Enviar
				</a>
			</form>
		</div>
		<div class="column"></div>
	</div>
</template>

<style type="text/css">
	.login{
		border: solid 0.5px gray;
	}
	.column{
		font-family: 'Roboto', sans-serif;
	}
	.logolog{
		width: 100%;
	}
	.titlelog{
		color: #00BFD6;
	}
	.input{
		margin: 10px 0;
	}

</style>

<script type="text/javascript">
	export default{
		name: 'login'
	}
	
</script>