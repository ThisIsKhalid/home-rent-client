import getHouseById from "@/actions/getHouseById";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import HouseClient from "./HouseClient";
import getReservations from "@/actions/getReservation";


interface IParams {
  houseId?: string;
}

const HouseDetails = async ({ params }: { params: IParams }) => {
    const listing = await getHouseById(params);
    const currentUser = await getCurrentUser();
    const reservations = await getReservations(params)
    // console.log(reservations);


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