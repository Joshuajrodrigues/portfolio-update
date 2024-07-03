import { json } from '@sveltejs/kit';
import { createUser } from '../../db/queries';


export async function POST({ request }) {

    const { name } = await request.json();
    console.log("request", name);

    const response = await createUser({ name });

    return json(response, { status: 201 });
}