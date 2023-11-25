import getHouseById from "@/actions/getHouseById";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import HouseClient from "./HouseClient";


interface IParams {
  houseId?: string;
}

const HouseDetails = async ({ params }: { params: IParams }) => {
    const listing = await getHouseById(params);
    const currentUser = await getCurrentUser();
    // console.log(listing);


     if (!listing) {
       return (
         <ClientOnly>
           <EmptyState />
         </ClientOnly>
       );
     }

   return (
    <ClientOnly>
      <HouseClient
        listing={listing}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default HouseDetails