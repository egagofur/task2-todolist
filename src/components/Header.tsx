import * as HoverCard from "@radix-ui/react-hover-card";

import { useFetchUser } from "../helpers";

export default function Header() {
  const { data } = useFetchUser();

  return (
    <header className="pb-2">
      <div className="flex items-center">
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <a
              className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
              href={data?.data.html_url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="block h-[45px] w-[45px] rounded-full"
                src={data?.data.avatar_url}
                alt={data?.data.name}
              />
            </a>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content
              className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
              sideOffset={5}
            >
              <div className="flex flex-col gap-[7px]">
                <img
                  className="block h-[60px] w-[60px] rounded-full"
                  src={data?.data.avatar_url}
                  alt="Radix UI"
                />
                <div className="flex flex-col gap-[15px]">
                  <div>
                    <div className="text-mauve11 m-0 text-[15px] leading-[1.5]">
                      @{data?.data.name}
                    </div>
                    <h3 className="text-sm text-gray-500 font-jakartaPlus">
                      {data?.data.location}
                    </h3>
                  </div>
                  <div className="text-mauve12 m-0 text-[15px] leading-[1.5]">
                    {data?.data.bio}
                  </div>
                  <div className="flex gap-[15px]">
                    <div className="flex gap-[5px]">
                      <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                        {data?.data.following}
                      </div>{" "}
                      <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                        Following
                      </div>
                    </div>
                    <div className="flex gap-[5px]">
                      <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                        {data?.data.followers}
                      </div>{" "}
                      <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                        Followers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <HoverCard.Arrow className="fill-white" />
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>

        <div className="flex flex-col flex-1 ml-4 font-jakartaPlus">
          <h1 className="text-base font-bold text-gray-400 ">Hello,</h1>
          <h2 className="text-xl font-bold text-gray-600">{data?.data.name}</h2>
        </div>
      </div>
    </header>
  );
}
