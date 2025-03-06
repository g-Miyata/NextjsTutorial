export const dynamic = 'force-static';
export async function GET() {
  const categories = [
    { id: 1, name: 'Eletronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Books' },
    { id: 4, name: 'Home & Garden' },
  ];
  return Response.json(categories);
}
