import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservation";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currenUser = await getCurrentUser();

  if (!currenUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please Login" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    userId: currenUser.id,
  });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Trips Found"
          subtitle="Looks like you haven't reserved any trips."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currenUser} />
    </ClientOnly>
  );
};

export default TripsPage;
