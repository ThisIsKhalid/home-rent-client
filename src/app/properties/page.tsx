import getCurrentUser from "@/actions/getCurrentUser";
import getHouses from "@/actions/getHouses";
import getReservations from "@/actions/getReservation";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currenUser = await getCurrentUser();

  if (!currenUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please Login" />
      </ClientOnly>
    );
  }

  const houses = await getHouses({
    userId: currenUser.id,
  });

  if (houses.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Properties Found"
          subtitle="Looks like you have no properties"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient houses={houses} currentUser={currenUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
