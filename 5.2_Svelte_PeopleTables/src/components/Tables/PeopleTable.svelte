<script>
    //Imports faker, remember to also add it in package.json and do "npm install @faker-js/faker --save-dev"
    import { faker } from '@faker-js/faker';
    import TableRow from "./TableRow.svelte";

    let fakePeople = [];
    
    //Sets names to be korean, cause why not?? :D
    faker.setLocale("ko");

    //Function to create people by using faker
    function createFakePeople(){
        const fakePerson = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            job: faker.name.jobArea(),
			title: faker.name.title()
        }
        fakePeople.push(fakePerson);
    }

    //Specifys how many people should be created, is set to 5 at the moment
    for (let i = 0; i < 5; i++) {
        createFakePeople();
    }

</script>
    
<h1>Here are some random people with korean names, their job and jobtitle</h1>

<!-- this creates tablerows with the created fake people -->
<TableRow fakePeople = {fakePeople}/>





<!-- I saw this on the interwebs about creating a crud version of a table and figured it might be relevant for me,
     however could not get it to work with objects as data, only if I hardcoded the people.
    
<script> 
	// Super simple quick and dirty CRUD Table.
	import { faker } from '@faker-js/faker';

	let fakePeople = [];

	const createFakePeople = () => {
		const randomName = faker.name.findName();
		const randomEmail = faker.internet.email();

		fakePeople = [...fakePeople, {randomName, randomEmail}]
	}
    
    for (let i = 0; i <5; i++) {
        createFakePeople();
    }


	let columns = ["Name", "Email"]
	let data = [
        fakePeople
  ]

	
</script>

<table>
	<tr>
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</tr>
	
	{#each data as row}
		<tr>
			{#each row as cell}
			<td contenteditable="true" bind:innerHTML={cell} />
			{/each}
			
		</tr>
	{/each}
	
</table>
-->