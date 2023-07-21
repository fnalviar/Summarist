import { useRouter } from "next/router";

function Book() {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return <div>Book Id</div>;
}
export default Book;
