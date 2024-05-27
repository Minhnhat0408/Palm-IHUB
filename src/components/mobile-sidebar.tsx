"use client";
import { ChevronRight, Menu } from "lucide-react";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { routes } from "@/lib/routes";
import { Link, useLocation } from "react-router-dom";

function MobileSidebar() {
  const [isMounted, setIsMounted] = useState(false);
  const pathName = useLocation().pathname;
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger className="justify-center px-2 lg:hidden ">
        <Menu />
      </SheetTrigger>
      <SheetContent side={"right"} className="w-56 p-4 pt-3">
        <Link
          to={"/"}
          onClick={() => {
            if (window.location.href == window.location.origin + "/")
              window.scrollTo({ top: 0 });
          }}
          className="cursor-pointer"
        >
          <div className="flex gap-x-2">
            <svg
              className="w-[35px] h-[55px] md:w-[50px] md:h-[70px] "
              viewBox="0 0 676 863"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M568.455 277.34C552.506 277.317 536.755 280.886 522.364 287.782V169.455C522.359 150.759 517.511 132.386 508.295 116.135C499.08 99.8852 485.812 86.3164 469.795 76.7592C453.777 67.202 435.558 61.9846 416.924 61.6185C398.291 61.2524 379.882 65.7501 363.504 74.6707C355.619 50.2264 339.296 29.4074 317.474 15.9594C295.651 2.51153 269.761 -2.68239 244.461 1.31222C219.161 5.30683 196.112 18.2277 179.463 37.7501C162.813 57.2724 153.655 82.1145 153.636 107.807V133.661C139.245 126.764 123.494 123.196 107.545 123.219C79.0226 123.219 51.668 134.585 31.4993 154.818C11.3307 175.05 0 202.491 0 231.104V523.934C0 613.86 35.6106 700.102 98.9979 763.69C162.385 827.277 248.357 863 338 863C427.643 863 513.615 827.277 577.002 763.69C640.389 700.102 676 613.86 676 523.934V385.225C676 356.612 664.669 329.171 644.501 308.939C624.332 288.706 596.977 277.34 568.455 277.34ZM614.545 523.934C614.545 597.509 585.409 668.072 533.547 720.098C481.685 772.124 411.344 801.352 338 801.352C264.656 801.352 194.315 772.124 142.453 720.098C90.5905 668.072 61.4545 597.509 61.4545 523.934V231.104C61.4545 218.841 66.3105 207.081 74.9543 198.41C83.598 189.739 95.3214 184.867 107.545 184.867C119.77 184.867 131.493 189.739 140.137 198.41C148.78 207.081 153.636 218.841 153.636 231.104V400.637C153.636 408.812 156.874 416.652 162.636 422.433C168.399 428.213 176.214 431.461 184.364 431.461C192.513 431.461 200.329 428.213 206.091 422.433C211.854 416.652 215.091 408.812 215.091 400.637V107.807C215.091 95.5441 219.947 83.7837 228.591 75.1127C237.234 66.4417 248.958 61.5704 261.182 61.5704C273.406 61.5704 285.129 66.4417 293.773 75.1127C302.417 83.7837 307.273 95.5441 307.273 107.807V369.813C307.273 377.988 310.51 385.828 316.273 391.609C322.035 397.389 329.851 400.637 338 400.637C346.149 400.637 353.965 397.389 359.727 391.609C365.49 385.828 368.727 377.988 368.727 369.813V169.455C368.727 157.192 373.583 145.432 382.227 136.761C390.871 128.09 402.594 123.219 414.818 123.219C427.042 123.219 438.766 128.09 447.409 136.761C456.053 145.432 460.909 157.192 460.909 169.455V434.042C417.975 441.385 379.01 463.713 350.897 497.083C322.784 530.452 307.333 572.716 307.273 616.406C307.273 624.581 310.51 632.422 316.273 638.202C322.035 643.983 329.851 647.23 338 647.23C346.149 647.23 353.965 643.983 359.727 638.202C365.49 632.422 368.727 624.581 368.727 616.406C368.727 583.706 381.677 552.345 404.727 529.222C427.776 506.1 459.039 493.109 491.636 493.109C499.786 493.109 507.601 489.862 513.364 484.081C519.126 478.301 522.364 470.46 522.364 462.285V385.225C522.364 372.962 527.22 361.202 535.863 352.531C544.507 343.86 556.23 338.988 568.455 338.988C580.679 338.988 592.402 343.86 601.046 352.531C609.689 361.202 614.545 372.962 614.545 385.225V523.934Z"
                fill="white"
              />
            </svg>
            <span>Palm</span>
          </div>
        </Link>
        <div className="flex h-full w-full flex-col items-start justify-start gap-y-3  pt-6">
          {routes.map((navBar, index) => {
            return (
              <SheetClose asChild key={index}>
                <Link
                  key={navBar.href}
                  to={navBar.href}
                  className={cn(
                    "group flex w-full cursor-pointer justify-start text-white/50  rounded-lg p-3 text-sm font-medium transition duration-500 hover:text-white",
                    (navBar.href === "/" && navBar.href === pathName) ||
                      (navBar.href !== "/" && pathName.startsWith(navBar.href))
                      ? " text-super"
                      : ""
                  )}
                >
                  <div
                    className={cn("flex flex-1 items-center justify-between ")}
                  >
                    {navBar.label}
                    <ChevronRight />
                  </div>
                </Link>
              </SheetClose>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
