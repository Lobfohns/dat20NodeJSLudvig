<script>
    import TableHead from "./TableHead.svelte";
    export let fakePeople = []
</script>

<table>
<TableHead/>
<tbody>
  {#each fakePeople as fakePerson}
<tr>
<td>
    {fakePerson.firstName} {fakePerson.lastName}
</td>
<td>
    {fakePerson.job}
</td>
<td>
    {fakePerson.title}
</td>
</tr>
{/each}
</tbody>
</table>

<style>
    table {
        border-collapse: collapse;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        margin-left: auto;
        margin-right: auto;
	}
    
    table td {
        padding: 12px 15px;
    }

    table tbody tr {
        border-bottom: 1px solid #dddddd;
    }

    table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
    }
</style>
