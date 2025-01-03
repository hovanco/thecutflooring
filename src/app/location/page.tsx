import Link from "next/link";
import LocationMapsImg from "../../assets/images/location-maps-img.jpg";
import MapComponent from "@/components/Maps";

const LocationPage = () => {
  return (
    <main id="location-page">
      <section className="section location-section">
        <div className="container">
          <div className="row">
            <div className="col-6 col-large-12">
              {/* <div className="location-wrapper-img">
                <img
                  className="location-img"
                  src={LocationMapsImg.src}
                  alt="LocationMapsImg"
                />
              </div> */}
              <MapComponent />
            </div>
            <div className="col-6 col-large-12">
              <div className="location-time">
                <div className="location-date">
                  <p>Monday – Friday</p>
                  <p>Open</p>
                </div>
                <div className="location-date">
                  <p>Saturday – Sunday</p>
                  <p>Closed</p>
                </div>
              </div>
              <div className="divider-line" />
              <div className="location-bottom">
                <div className="row">
                  <div className="col-6 col-small-12">
                    <div className="location-address">
                      <h4 className="location-title">Address</h4>
                      <p className="location-sub-title">
                        1196 Kennedy Rd, Scarborough Toronto , Ontario Canada
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-small-12">
                    <div className="location-contact">
                      <div className="location-phone">
                        <h4 className="location-title">Phone</h4>
                        <p className="location-sub-title">
                          <Link href="tel:6472963377">6472963377</Link>
                        </p>
                      </div>
                      <div className="location-email">
                        <h4 className="location-title">Email</h4>
                        <Link
                          href="mailto:Thecutflooring@gmail.com"
                          className="location-sub-title email-link"
                        >
                          Thecutflooring@gmail.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default LocationPage;
