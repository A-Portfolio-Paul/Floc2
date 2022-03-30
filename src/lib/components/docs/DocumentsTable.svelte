<script>
		import { documents} from '../../stores';
		import ToolbarDocuments from './document/furniture/buttons/document/ToolbarDocuments.svelte'

		export let docId 

		const loadDoc = (id) =>{
		docId = id
	}
</script>

<!-- This is an example component -->
<div class="max-w-2xl mx-auto">
	<div class="flex flex-col">
		<div class="overflow-x-auto shadow-md sm:rounded-lg">
			<div class="inline-block min-w-full align-middle">
				<div class="overflow-hidden ">
					<table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
						<thead class="bg-green-500  ">
							<tr>
								<!-- <th scope="col" class="p-4">
									<div class="flex items-center">
										<input
											id="checkbox-all"
											type="checkbox"
											class="w-4 h-4 text-gray-900 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label for="checkbox-all" class="sr-only">checkbox</label>
									</div>
								</th> -->
								<th
									scope="col"
									class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100 uppercase"
								>
									Documents
								</th>

								<th scope="col" class="p-4">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						{#each $documents as document}
						<tbody class="bg-white divide-y divide-gray-200 bg-gray-100 ">
							<tr class="hover:bg-green-400">
								<!-- <td class="p-4 w-4">
									<div class="flex items-center">
										<input
											id="checkbox-table-1"
											type="checkbox"
											class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label for="checkbox-table-1" class="sr-only">checkbox</label>
									</div>
								</td> -->

								<td on:click={() => loadDoc(document.docId)}
									class="py-4 px-6 text-sm font-medium text-gray-900 hover:text-blue-800 hover:cursor-pointer hover:underline whitespace-nowrap"
									>{document.title}</td
								>
								<td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
									<ToolbarDocuments docId={document.docId}/>
								</td>
							</tr>
						</tbody>
						{/each}
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
