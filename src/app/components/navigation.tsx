import { Popover } from "@base-ui/react/popover";
import { Link } from "./link";
import { twMerge } from "tailwind-merge";
import { Paragraph } from "./paragraph";
import { CSSProperties, useRef } from "react";
import { NavigationIconDisplay } from "./navigation-icon-display";
import { useState } from "react";
import { Button } from "./button";

const NavPromoItems = [
  {
    image: "/nav/promo1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur",
    buttonText: "Learn more",
  },
  {
    image: "/nav/promo2.jpg",
    text: "Sed ut perspiciatis unde omnis iste",
    buttonText: "Learn more",
  },
  {
    image: "/nav/promo3.jpg",
    text: "Nemo enim ipsam voluptatem quia",
    buttonText: "Learn more",
  },
  {
    image: "/nav/promo4.jpg",
    text: "Ut enim ad minima veniam quis",
    buttonText: "Learn more",
  },
];

const NavigationPromo = ({
  image,
  text,
}: {
  image: string;
  text: string;
  buttonText: string;
}) => {
  return (
    <>
      <Link href="#" className="h-max-content flex">
        <div className="group relative h-full py-12 pr-10">
          <div
            className="h-full min-h-[400px] w-[250px] rounded-lg bg-(image:--image-url) bg-cover bg-right bg-no-repeat p-6"
            style={
              {
                "--image-url": `url(${image})`,
              } as CSSProperties
            }
          >
            <div className="flex h-full flex-col items-start justify-between text-left">
              <Paragraph
                size="xl"
                className="text-left tracking-tight text-black"
              >
                {text}
              </Paragraph>
            </div>
            <a
              href="#"
              className="absolute top-12 left-0 z-10 h-[400px] w-[250px] rounded-lg bg-black opacity-0 transition-opacity duration-300 hover:opacity-10"
            ></a>
          </div>
        </div>
      </Link>
    </>
  );
};

const NavigationDesktopItem = ({
  title,
  children,
  href,
  promoItem,
}: {
  title: string;
  children: React.ReactNode;
  href?: string;
  promoItem?: { image: string; text: string; buttonText: string };
}) => {
  // Controlled popover open state
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerClasses = twMerge(
    "cursor-pointer rounded-md px-2 py-1 font-london text-lg transition-colors outline-none",
    open ? "bg-tintgreen" : "hover:bg-tintgreen",
  );

  // Handle hover events with delay
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow mouse to move to popover
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger
          nativeButton={false}
          render={(props) => {
            const { key, ...divProps } =
              props as React.HTMLAttributes<HTMLElement> & {
                key?: string;
              };
            if (href) {
              return (
                <Link
                  key={key}
                  {...(divProps as React.HTMLAttributes<HTMLAnchorElement>)}
                  href={href}
                  className={triggerClasses}
                >
                  {title}
                </Link>
              );
            }

            return (
              <div
                key={key}
                {...(divProps as React.HTMLAttributes<HTMLDivElement>)}
                className={triggerClasses}
                role="button"
                tabIndex={0}
              >
                {title}
              </div>
            );
          }}
        />
        <Popover.Portal>
          <Popover.Positioner
            sideOffset={8}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Popover.Popup
              className={twMerge(
                promoItem ? "ml-4" : "ml-24",
                "shadow-custom-navigation mt-4 flex h-full max-w-[1300px] flex-row items-stretch rounded-md bg-white outline-none [&_a]:outline-none [&_button]:outline-none",
                "transition-all duration-300 ease-out",
                "data-[state=open]:scale-100 data-[state=open]:opacity-100",
                "data-[state=closed]:pointer-events-none data-[state=closed]:scale-95 data-[state=closed]:opacity-0",
              )}
              style={{ width: "max-content" }}
            >
              <Popover.Title className="sr-only">{title}</Popover.Title>
              <Popover.Description className="sr-only">
                Description
              </Popover.Description>
              <div
                className={twMerge("h-full", promoItem ? "w-[78%]" : "flex-1")}
              >
                {children}
              </div>
              {promoItem ? <NavigationPromo {...promoItem} /> : null}
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

const NavigationDesktopSubItem = ({
  title,
  description,
  href,
  iconName,
  level,
}: {
  title: string;
  description?: string;
  href?: string;
  iconName?: string;
  level?: number;
}) => {
  return (
    <>
      {href ? (
        <Link
          className="flex items-start justify-start gap-3 rounded-md px-3 py-2 outline-none hover:rounded-md hover:bg-tintgreen"
          href={href}
        >
          {iconName && (
            <div className="mt-[3px]">
              <NavigationIconDisplay navItem={iconName} />
            </div>
          )}
          <div className="flex flex-col">
            <Paragraph
              size="xl"
              className={twMerge(
                level === 1 && "md:text-[24px]",
                level === 2 && "md:text-[18px]",
                level === 3 && "md:text-[12px]",
              )}
            >
              {title}
            </Paragraph>
            {description && (
              <Paragraph
                size="base"
                className="text-navigation-description md:text-[12px]"
              >
                {description}
              </Paragraph>
            )}
          </div>
        </Link>
      ) : (
        <div className="flex items-start justify-start gap-3">
          <div className="mt-[3px]">
            {iconName && <NavigationIconDisplay navItem={iconName} />}
          </div>
          <div className="flex flex-col">
            <Paragraph
              size="xl"
              className={twMerge(
                level === 1 && "md:text-[24px]",
                level === 2 && "md:text-[18px]",
                level === 3 && "md:text-[12px]",
              )}
            >
              {title}
            </Paragraph>
            {description && (
              <Paragraph
                size="base"
                className="text-navigation-description md:text-[12px]"
              >
                {description}
              </Paragraph>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export const NavigationDesktop = () => {
  return (
    <div className="hidden w-max gap-8 md:flex items-center">
      <NavigationDesktopItem
        title="Why our Company"
        href="#"
        promoItem={NavPromoItems[0]}
      >
        <div className="grid grid-cols-2 gap-6 px-10 py-12">
          <div className="flex flex-col gap-12">
            <div className="h-[278px] w-full bg-[url('/PlatformImage.png')] bg-cover">
              <NavigationDesktopSubItem
                title="Ullamco laboris nisi"
                description="Duis aute irure dolor in reprehenderit in voluptate"
                href="#"
                iconName="gladlyWatermark"
              />
            </div>
            <Button
              as={Link}
              href="#"
              variant="white"
              buttonIconStyle="arrow"
              className="flex w-fit border-2 border-brand-primary [&_.button-base]:pl-3 [&_.text-container]:flex-nowrap [&_.text-container]:text-base"
            >
              Voluptas sit aspernatur
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <NavigationDesktopSubItem
              iconName="customerAI"
              title="Excepteur sint"
              description="Cupidatat non proident sunt in culpa qui officia"
              href="#"
            />
            <NavigationDesktopSubItem
              iconName="appPlatform"
              title="Fugiat nulla pariatur"
              description="Laboris nisi ut aliquip ex ea commodo consequat"
              href="#"
            />
            <NavigationDesktopSubItem
              iconName="integrations"
              title="Sunt in culpa"
              description="Qui officia deserunt mollit anim id est laborum"
              href="#"
            />
            <NavigationDesktopSubItem
              iconName="omniChannel"
              title="Itaque earum rerum"
              description="Hic tenetur a sapiente delectus ut aut reiciendis voluptatibus"
              href="#"
            />
            <NavigationDesktopSubItem
              iconName="privacy"
              title="Quas molestias"
              description="Excepturi sint occaecati cupiditate non provident"
              href="#"
            />
          </div>
        </div>
      </NavigationDesktopItem>
      <NavigationDesktopItem title="Product" promoItem={NavPromoItems[1]}>
        <div className="grid grid-cols-2 gap-6 px-10 py-12">
          <div className="flex flex-col gap-3">
            <NavigationDesktopSubItem
              title="Lorem Ipsum"
              description="Sed ut perspiciatis unde omnis iste natus error"
              href="#"
              level={1}
            />
            <div className="flex flex-col">
              <NavigationDesktopSubItem
                title="Amet consectetur"
                description="Nemo enim ipsam voluptatem quia voluptas sit"
                href="#"
                level={2}
                iconName="heldesks"
              />
              <NavigationDesktopSubItem
                title="Adipiscing elit sed"
                description="Ut enim ad minima veniam quis nostrum"
                href="#"
                iconName="configure"
                level={2}
              />

              <NavigationDesktopSubItem
                title="Tempor incididunt"
                description="Quis autem vel eum iure reprehenderit qui in ea"
                href="#"
                iconName="shoppingAssistant"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Dolore magna"
                description="At vero eos et accusamus et iusto odio dignissimos"
                href="#"
                level={2}
                iconName="voiceAI"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <NavigationDesktopSubItem
              title="Voluptatem Accusantium"
              description="Nam libero tempore cum soluta nobis est eligendi"
              href="#"
              level={1}
            />
            <div className="flex flex-col">
              <NavigationDesktopSubItem
                title="Doloremque laudantium"
                description="Totam rem aperiam eaque ipsa quae ab illo"
                href="#"
                iconName="conversationTimeline"
              />
              <NavigationDesktopSubItem
                title="Inventore veritatis"
                description="Quasi architecto beatae vitae dicta sunt explicabo"
                href="#"
                iconName="customerProfile"
              />
              <NavigationDesktopSubItem
                title="Natus error sit"
                description="Accusantium doloremque laudantium totam rem"
                href="#"
                iconName="agentCopilot"
              />
              <NavigationDesktopSubItem
                title="Perspiciatis unde"
                description="Omnis iste natus error sit voluptatem accusantium"
                href="#"
                iconName="insights"
              />
              <NavigationDesktopSubItem
                title="Consequuntur magni"
                description="Dolores eos qui ratione voluptatem sequi nesciunt"
                href="#"
                iconName="smartRouting"
              />
            </div>
          </div>
        </div>
      </NavigationDesktopItem>
      <NavigationDesktopItem title="Solutions" promoItem={NavPromoItems[2]}>
        <div className="grid grid-cols-3 gap-6 px-10 py-12">
          <div className="flex min-w-[230px] flex-col">
            <NavigationDesktopSubItem title="Teams" href="#" level={1} />
            <div className="flex flex-col">
              <NavigationDesktopSubItem
                title="Support & service"
                href="#"
                iconName="supportService"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Ecommerce & sales"
                href="#"
                iconName="ecommerceSales"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Contact center operations"
                href="#"
                iconName="contactCenter"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Technology leadership"
                href="#"
                iconName="technologyLeadership"
                level={2}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <NavigationDesktopSubItem title="Industries" href="#" level={1} />
            <div className="flex flex-col">
              <NavigationDesktopSubItem
                title="Retail & ecommerce"
                href="#"
                iconName="retailEcommerce"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Health and wellness"
                href="#"
                iconName="healthWellness"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Media & entertainment"
                href="#"
                iconName="media"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Travel & hospitality"
                href="#"
                iconName="travelHospitality"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Online marketplaces"
                href="#"
                iconName="marketplace"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Telecommunications"
                href="#"
                iconName="telecom"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Consumer goods"
                href="#"
                iconName="consumerDurables"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Technology & software"
                href="#"
                iconName="technologySoftware"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Financial services"
                href="#"
                iconName="financialServices"
                level={2}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <NavigationDesktopSubItem title="Company size" href="#" level={1} />
            <div className="flex flex-col">
              <NavigationDesktopSubItem
                title="Emerging businesses"
                href="#"
                iconName="scalingCompanies"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Growing companies"
                href="#"
                iconName="growingBusinesses"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Established enterprises"
                href="#"
                iconName="establishedEnterprises"
                level={2}
              />
            </div>
          </div>
        </div>
      </NavigationDesktopItem>
      <NavigationDesktopItem
        title="Resources"
        href="#"
        promoItem={NavPromoItems[3]}
      >
        <div className="grid grid-cols-[1fr_1.5fr_1.5fr_1fr] gap-6 p-10">
          <div className="flex flex-col gap-3">
            <NavigationDesktopSubItem title="Evaluate" level={1} />
            <div className="flex flex-col">
              <NavigationDesktopSubItem
                title="Why Company A"
                href="#"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Customer stories"
                href="#"
                level={2}
              />
              <NavigationDesktopSubItem title="Compare us" href="#" level={2} />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <NavigationDesktopSubItem title="Learn" level={1} />
            <div className="flex flex-col">
              <NavigationDesktopSubItem
                title="Reports & downloads"
                href="#"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Articles & insights"
                href="#"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Live events"
                href="#"
                level={2}
              />
              <NavigationDesktopSubItem title="On-demand" href="#" level={2} />
              <NavigationDesktopSubItem
                title="Interactive tools"
                href="#"
                level={2}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <NavigationDesktopSubItem title="Support" level={1} />
            <div className="flex flex-col">
              <NavigationDesktopSubItem
                title="Developer resources"
                href="#"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Release notes"
                href="#"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Privacy & security"
                href="#"
                level={2}
              />
              <NavigationDesktopSubItem
                title="Got questions?"
                href="#"
                level={2}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <NavigationDesktopSubItem title="Company" level={1} />
            <div className="flex flex-col">
              <NavigationDesktopSubItem title="About us" href="#" level={2} />
              <NavigationDesktopSubItem title="Careers" href="#" level={2} />
              <NavigationDesktopSubItem
                title="Become a partner"
                href="#"
                level={2}
              />
              <NavigationDesktopSubItem title="Learning" href="#" level={2} />
            </div>
          </div>
        </div>
      </NavigationDesktopItem>
    </div>
  );
};
