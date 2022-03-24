import React from "react";
import { Link } from "react-router-dom";

const data = {
  title: "FAQ ",
  rows: [
    {
      id:1,
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      id:2,
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      id:3,
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      id:4,
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

function Faq(props) {
  return (  
    <div className="FAQPage">
      <div className="mb-5">
        Go back to
        <Link to="/" className=" btn-link m-3" data-test="login">
          {" "}
          Login{" "}
        </Link>
        <Link to="/registration" className=" btn-link pr-0" data-test="registration">
          {" "}
          Registration{" "}
        </Link>
      </div>

      <h1>FAQ </h1>
      <div>
        {data.rows.map((faq) => (
          <div key={faq.id} className=" p-5">
            <h3 className="font-weight-bold"> {faq.title}</h3>
            <span className="text-justify ">{faq.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
