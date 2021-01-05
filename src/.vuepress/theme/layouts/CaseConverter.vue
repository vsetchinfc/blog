<template>
	<form>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 mt-3">
					<header>
						<h1>Case Converter</h1>
					</header>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 mt-3 form-inline">
					<div class="form-group">
						<strong><label for="converterSelector">Converter:<select id="converterSelector" class="form-control ml-2">
							<option disabled value="">Please select converter</option>
							<option>Camel Case Converter</option>
							<option>Kebab Case Converter</option>
							<option>Snake Case Converter</option>
						</select></label></strong>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 mt-3 mb-3">
					<div class="card border-0">
						<div class="card-body">
							<h4 class="card-title">CamelCase Converter</h4>
							The CamelCase Converter allows changing the spelling of a text by converting it to CamelCase. For CamelCase spaces are removed between words and the first letter of each word is capitalized. Accordingly, the result is a compound word of multiple words. The text can simply be typed or copied into the form.
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-6 col-sm-12 form-group">
					<strong><label for="stringInput" class="w-100">String to convert:
						<textarea id="stringInput" class="form-control" rows="5" placeholder="Enter string to convert"></textarea>
					</label></strong>
				</div>
				<div class="col-lg-6 col-sm-12 form-group">
					<strong><label for="stringOutput" class="w-100">Converted string:
						<textarea id="stringOutput" class="form-control" rows="5" readonly placeholder="Result will appear here"></textarea>
					</label></strong>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-6">
					<button type="button" class="btn btn-lg btn-primary w-100">Convert to CamelCase</button>
				</div>
				<div class="col-lg-6">
					<button type="button" class="btn btn-lg btn-info w-100">Clear strings</button>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 col-sm-12 mt-4">
					<div class="card card-body border-0">
						<h4 class="card-title">CamelCase result example</h4>
						<div class="table-responsive">
							<table class="table table-bordered">
								<tbody>
									<tr>
										<td><strong>Input</strong></td>
										<td>The CamelCase Converter converts text to CamelCase.</td>
									</tr>
									<tr>
										<td><strong>Output</strong></td>
										<td>TheCamelcaseConverterConvertsTextToCamelcase</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>

</style>