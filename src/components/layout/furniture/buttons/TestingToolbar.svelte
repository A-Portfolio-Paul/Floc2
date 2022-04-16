<script>
import Button from './Button.svelte'
import { seedDb } from '../../../../utils/mockupData/seedDb/seedDb';
</script>

<Button label='seed database' action={seedDb}/>