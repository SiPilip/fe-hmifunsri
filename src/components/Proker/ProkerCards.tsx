import { useEffect, useState } from "react";
import ProkerCardItem from "./ProkerCardItem";
import { Button } from "../ui/button";

type Props = {
  dinas: string;
  item: any;
  nav: string;
};

export default function ProkerCards({ dinas, item, nav }: Props) {
  const [proker, setProker] = useState([]);
  const [sliced, setSliced] = useState(3);

  useEffect(() => {
    if (item) {
      setProker(item || null);
    }

    // console.log(proker);
  }, [item]);

  function showMoreItems() {
    setSliced(sliced + 3);
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {dinas == "all"
        ? proker
            .flat()
            .slice(0, sliced)
            .map((proker, key) => (
              <ProkerCardItem
                assets={proker["assets"]}
                key={key}
                eventFormat={proker["eventFormat"]}
                name={proker["name"]}
                date={proker["date"]}
                description={proker["description"]}
                dinas={proker["dinas"]}
                nav={nav}
              />
            ))
        : proker
            .slice(0, sliced)
            .map((proker, key) => (
              <ProkerCardItem
                assets={proker["assets"]}
                key={key}
                eventFormat={proker["eventFormat"]}
                name={proker["name"]}
                date={proker["date"]}
                description={proker["description"]}
                dinas={proker["dinas"]}
                nav={nav}
              />
            ))}

      {/* See more Button */}
      {dinas == "all"
        ? sliced < proker.flat().length && (
            <div className="w-full">
              <Button
                onClick={showMoreItems}
                className="w-full rounded-2xl py-6 text-lg text-primary lg:w-11/12"
                variant={"outline"}
              >
                See more
              </Button>
            </div>
          )
        : sliced < proker.length && (
            <div className="w-full">
              <Button
                onClick={showMoreItems}
                className="w-full rounded-2xl py-6 text-lg text-primary lg:w-11/12"
                variant={"outline"}
              >
                See more
              </Button>
            </div>
          )}
    </div>
  );
}
