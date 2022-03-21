<script></script>

<div class="p-20 flex flex-row">
	<article>
		<h1>Current folders</h1>
		<ul>
			<li>svelte-kit</li>
			<li>node_modules</li>
			<li>
				src
				<ul>
					<li>data</li>
					<li>
						lib
						<ul>
							<li>
								components
								<ul>
									<li>auth</li>
									<li>docs</li>
									<ul>
										<li>myDocuments</li>
										<ul>
											<li>
												document
												<ul>
													<li>
														furniture
														<ul><li>buttons</li></ul>
													</li>

													<li>preview</li>
													<li>stores</li>
												</ul>
											</li>
										</ul>
										<li>todo</li>
									</ul>
									<li>layout</li>
									<li>pages</li>
								</ul>
							</li>
							<li>functions</li>
							<li>wiki</li>
						</ul>
					</li>
					<li>routes</li>
				</ul>
			</li>
		</ul>
	</article>
	<article>
		<h1>New folders</h1>
		<ul>
			<li>svelte-kit</li>
			<li>node_modules</li>
			<li>
				src
				<ul>
					<li>
						lib
						<ul>
							<li>
								components
								<ul>
									<li>auth</li>
									<li>wiki</li>
									<li>docs</li>
									<ul>
                                        <li>documents</li>
										<li>
											document
											<ul>
												<li>
													furniture
													<ul><li>buttons</li></ul>
												</li>

												<li>preview</li>
												<li>stores</li>
											</ul>
										</li>
									</ul>
									<li>layout</li>
									<li>pages</li>
								</ul>
							</li>
							<li>functions</li>
							<li>stores</li>
							<li>db</li>
						</ul>
					</li>
					<li>routes</li>
				</ul>
			</li>
		</ul>
	</article>
</div>

<style>
	h1 {
		text-align: center;
		color: white;
		font-size: large;
	}
	ul {
		background-color: black;
		color: white;
	}
	ul > li > ul {
		background-color: white;
		color: black;
	}
	ul > li > ul > li > ul {
		background-color: gray;
		color: white;
	}
	ul > li > ul > li > ul > li > ul {
		background-color: white;
		color: black;
	}
	ul {
		margin-left: 10px;
		margin-top: 3px;
		padding-left: 3px;
	}
	article {
		background-color: black;
		padding: 10px;
		border-radius: 4px;
		width: 600px;
		margin: 2px;
	}
</style>
