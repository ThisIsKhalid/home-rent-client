import getCurrentUser from "@/actions/getCurrentUser";
import getHouses, { IHousesParams } from "@/actions/getHouses";
import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ListingCard from "@/components/houses/ListingCard";

interface HomeProps {
  searchParams: IHousesParams
};

const Home = async ({ searchParams }: HomeProps) => {
  const houses = await getHouses(searchParams);
  const currentUser = await getCurrentUser();
  

  if (houses?.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {houses?.map((house: any) => (
            <ListingCard
              currentUser={currentUser}
              key={house.id}
              data={house}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;