import * as React from "react";
import DeldicoTrackingClient from "tracking-client";
import NewLeadForm from "./NewLeadForm";

const trackingClient = new DeldicoTrackingClient({
  gtmUrl: "https://moonlit-sound-jxuftsnoa1.ploi.link/j/deldicotracking",
});

export default function App() {
  const [fingerprintDisplay, setFingerprintDisplay] = React.useState("");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  React.useEffect(() => {
    (async () => {
      await trackingClient.init();

      setFingerprintDisplay(trackingClient.fingerprint as string);

      window.dataLayer.push({
        event: "page_visit",
        fingerprint: trackingClient.fingerprint,
      });
    })();
  }, []);

  const updateFormField = React.useCallback(
    (key: string, value: string) => {
      const _formData = Object.assign({}, formData);
      _formData[key] = value;
      setFormData(_formData);
    },
    [formData]
  );

  return (
    <div className="p-12 font-body">
      <div className="prose max-w-screen-lg mx-auto my-0">
        <h1 className="">Deldico Tracking Tester</h1>
        <div className="mb-16">
          <div className="mb-4">
            <span className="mr-2">Fingerprint:</span>
            <span>{fingerprintDisplay}</span>
          </div>
          <div>
            <span className="mr-2">UTM link:</span>
            <a href="http://localhost:8000?utm_campaign=spring_sale&utm_source=marketing&utm_medium=email">
              http://localhost:8000?utm_campaign=spring_sale&utm_source=marketing&utm_medium=email
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <NewLeadForm data={formData} onChange={updateFormField} />
          </div>
          <div>
            {/* <Button
              color="gold"
              onClick={() => {
                window.dataLayer.push({
                  event: "lead_converted",
                });
              }}
            >
              Convert lead
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
