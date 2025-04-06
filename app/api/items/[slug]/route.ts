type props = {params: {slug: string}};

export async function GET(req: Request, {params}: props) {
    const slug = params.slug;

    return new Response(`Item : ${slug}`)
}