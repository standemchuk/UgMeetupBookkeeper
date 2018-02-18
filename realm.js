import Realm from 'realm';
import { ExpenseSchema } from './src/schemas/ExpenseSchema';

const realm = new Realm({
    schema: [ExpenseSchema],
    schemaVersion: 1,
    migration: (oldRealm, newRealm) => {
        const oldObjects = oldRealm.objects('Expense');
        const newObjects = newRealm.objects('Expense');

        // loop through all objects and set the name property in the new schema
        for (let i = 0; i < oldObjects.length; i += 1) {
            newObjects[i] = { ...oldObjects[i] };
        }
    }
});

export default realm;