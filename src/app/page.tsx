// import QuickSearch from "@/components/shared/QuickSearch";
// import PopupButton from "@/components/shared/PopupBtn";
// import { FaUser, FaCog, FaEnvelope } from "react-icons/fa";
import InteractiveMap from "@/components/ui/InteractiveMap";

export default function Home() {
  return (
    <div>
      {/* <div className="bg-gray-100 p-2 flex gap-2 rounded-md justify-between">
        <QuickSearch />
        <div className="flex gap-2">
          <PopupButton
            icon={<FaUser />}
            title="Which visual culture?"
            description="This popup shows information about the user."
          />
          <PopupButton
            icon={<FaCog />}
            title="which ecology?"
            description="Adjust your application settings here."
          />
          <PopupButton
            icon={<FaEnvelope />}
            title="which medium?"
            description="You have new unread messages."
          />
          <PopupButton
            icon={<FaEnvelope />}
            title="which network?"
            description="You have new unread messages."
          />
        </div>
      </div> */}
      <div className="map mt-5">
        <InteractiveMap />
      </div>
    </div>
  );
}
