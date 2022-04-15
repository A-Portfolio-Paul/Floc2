<script>
import Button from './Button.svelte'
import{loadDocs} from '../../../../utils/storesfuncs'
import { seedDb } from '../../../../utils/mockupData/seedDb/seedDb';
</script>

<Button label='load documents' action={loadDocs} />
<Button label='seed database' action={seedDb}/>