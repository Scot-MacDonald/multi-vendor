export async function GET(request, {params:{id}}) {
    try {
      const user = await db.user.findUnique({
        where:{
            id,
        }
      });
      return NextResponse.json(user);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { maessage: "Failed to fetch user", error },
        { status: 500 }
      );
    }
  }