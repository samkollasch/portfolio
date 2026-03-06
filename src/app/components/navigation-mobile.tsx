import { Accordion } from "@base-ui/react";
import { Button } from "./button";
import { twMerge } from "tailwind-merge";
import { Caret } from "./icons/caret";
import { Heading } from "./heading";
import { Link } from "./link";
import { Paragraph } from "./paragraph";
import { useState, useMemo } from "react";
import { NavigationIconDisplay } from "./navigation-icon-display";
import Image from "next/image";
import { CSSProperties } from "react";

type AccordionOpenChangeHandler = (value: string[]) => void;

export interface NavigationMobileHandle {
  closeAll: () => void;
}

const NavPromoItems = [
  {
    mobileImage: "/nav/promo1_mobile.png",
    text: "Lorem ipsum dolor sit amet consectetur",
    buttonText: "Learn more",
  },
  {
    mobileImage: "/nav/promo2_mobile.jpg",
    text: "Sed ut perspiciatis unde omnis iste",
    buttonText: "Learn more",
  },
  {
    mobileImage: "/nav/promo3_mobile.png",
    text: "Nemo enim ipsam voluptatem quia",
    buttonText: "Learn more",
  },
  {
    mobileImage: "/nav/promo4_mobile.jpg",
    text: "Ut enim ad minima veniam quis",
    buttonText: "Learn more",
  },
];

const NavigationPromo = ({
  mobileImage,
  text,
}: {
  mobileImage: string;
  text: string;
  buttonText: string;
}) => {
  return (
    <>
      <Link href="#" className="h-max-content flex">
        <div className="group relative h-full py-12 pr-10">
          {mobileImage ? (
            <div
              className="h-full min-h-40 w-[360px] rounded-lg bg-(image:--image-url) bg-contain bg-center bg-no-repeat"
              style={
                {
                  "--image-url": `url(${mobileImage})`,
                } as CSSProperties
              }
            >
              <div className="flex h-40 w-[42%] flex-col items-start justify-between p-3 text-left md:p-6">
                <Heading
                  as="div"
                  size="2xl"
                  className="text-left tracking-tight md:text-xl"
                >
                  {text}
                </Heading>
                <div className="flex w-full justify-start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"
                      fill="#009B00"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Link>
    </>
  );
};

const NavigationDesktopSubItemContent = ({
  title,
  description,
  iconName,
  level,
}: {
  title: string;
  description?: string;
  iconName?: string;
  level?: number;
}) => (
  <>
    {iconName && <NavigationIconDisplay navItem={iconName} />}
    <div className="flex flex-col">
      {level === 1 ? (
        <Heading as="h5" className="text-brand-navigation-heading">
          {title}
        </Heading>
      ) : (
        <Paragraph size="xl">{title}</Paragraph>
      )}
      {description && (
        <Paragraph size="base" className="text-brand-navigation-description">
          {description}
        </Paragraph>
      )}
    </div>
  </>
);

const NavigationMobileItem = ({
  title,
  children,
  value,
  promoItem,
}: {
  title: string;
  value: string;
  children: React.ReactNode;
  promoItem?: { mobileImage: string; text: string; buttonText: string };
}) => {
  return (
    <Accordion.Item value={value}>
      <Accordion.Header className="mx-4">
        <Accordion.Trigger className="group flex w-full items-center justify-between border-b border-b-brand-border py-6 font-london text-xl/[1.1] data-panel-open:border-b-0 data-panel-open:p-0">
          <span className="group-data-panel-open:invisible group-data-panel-open:h-0">
            {title}
          </span>
          <span
            className={twMerge(
              "h-6 w-6 origin-center rotate-360 transform transition-transform duration-300 ease-in-out",
              "group-data-panel-open:rotate-270",
              "group-data-panel-open:invisible group-data-panel-open:h-0",
            )}
          >
            <Caret width="24" height="24" />
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel className="mx-4 rounded-lg bg-white px-4 py-5">
        {children}
        {promoItem ? <NavigationPromo {...promoItem} /> : null}
      </Accordion.Panel>
    </Accordion.Item>
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
  if (href) {
    return (
      <Link
        className="flex items-start justify-start gap-3 rounded-sm px-3 py-2 hover:rounded-md hover:bg-tintgreen"
        href={href}
      >
        <NavigationDesktopSubItemContent
          {...{ title, description, iconName, level }}
        />
      </Link>
    );
  }
  return (
    <div className="flex items-start justify-start gap-3">
      <NavigationDesktopSubItemContent
        {...{ title, description, iconName, level }}
      />
    </div>
  );
};
interface NavigationMobileProps {
  open: boolean;
}

export const NavigationMobile = ({ open }: NavigationMobileProps) => {
  const [openItem, setOpenItem] = useState<string[]>([]);

  const handleOpenChange = (value: string[]) => {
    setOpenItem(value.length > 0 ? [value[0]] : []);
  };

  const closeAccordion = () => setOpenItem([]);
  const isItemOpen = openItem.length > 0;
  const currentOpenValue = isItemOpen ? openItem[0] : undefined;

  const allItems = useMemo(
    () => [
      {
        title: "Why our Company",
        value: "why-gladly",
        content: (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <NavigationDesktopSubItem
                title="Ullamco laboris nisi"
                description="Duis aute irure dolor in reprehenderit in voluptate"
                href="#"
                iconName="gladlyWatermark"
              />
              <Image
                src={"/PlatformImage.png"}
                height={198}
                width={369}
                alt="Ullamco laboris nisi"
                unoptimized
                priority
                style={{ width: "100%", height: "198px" }}
                className="md:hidden"
              />
              <Button
                as={Link}
                href="#"
                variant="white"
                buttonIconStyle="arrow"
                className="mt-6 flex w-fit border-2 border-brand-primary [&_.button-base]:pl-[12px] [&_.text-container]:flex-nowrap [&_.text-container]:text-base"
              >
                Voluptas sit aspernatur
              </Button>
            </div>
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
        ),
      },
      {
        title: "Product",
        value: "product",
        content: (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <NavigationDesktopSubItem
                title="Lorem Ipsum"
                description="Sed ut perspiciatis unde omnis iste natus error"
                href="#"
                level={1}
              />
              <div className="ml-3 flex flex-col">
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
              <div className="ml-3 flex flex-col">
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
                  iconName="agentCopilot"
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
        ),
      },
      {
        title: "Solutions",
        value: "solutions",
        content: (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <NavigationDesktopSubItem title="Teams" href="#" level={1} />
              <div className="ml-3 flex flex-col">
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
              <div className="ml-3 flex flex-col">
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
              <NavigationDesktopSubItem
                title="Company size"
                href="#"
                level={1}
              />
              <div className="ml-3 flex flex-col">
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
        ),
      },
      {
        title: "Resources",
        value: "resources",
        content: (
          <div className="flex flex-col gap-6">
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
                <NavigationDesktopSubItem
                  title="Compare us"
                  href="#"
                  level={2}
                />
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
                <NavigationDesktopSubItem
                  title="On-demand"
                  href="#"
                  level={2}
                />
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
        ),
      },
    ],
    [],
  );

  const renderAllItems = () => (
    <>
      {allItems.map((item, index) => {
        if (isItemOpen && item.value !== currentOpenValue) return null;
        return (
          <NavigationMobileItem
            key={item.value}
            title={item.title}
            value={item.value}
            promoItem={NavPromoItems[index]}
          >
            {item.content}
          </NavigationMobileItem>
        );
      })}
    </>
  );

  return (
    <div
      className={twMerge(
        "absolute top-full right-0 left-0 flex w-full flex-col bg-lightgrey transition-opacity duration-300",
        open
          ? "h-[calc(100vh-76px)] opacity-100"
          : "pointer-events-none h-0 opacity-0",
      )}
    >
      <div
        className={twMerge(
          "back sticky top-0 z-10 flex items-center gap-1 border-b border-b-brand-border bg-lightgrey px-3 py-3 text-brand-primary transition-all duration-300",
          isItemOpen
            ? "visible h-auto opacity-100"
            : "invisible m-0 h-0 border-b-0 p-0 opacity-0",
        )}
        onClick={closeAccordion}
      >
        <Caret
          width="12"
          height="12"
          className="rotate-180 text-brand-primary"
        />
        <Paragraph size="2xl" className="text-brand-primary">
          Back
        </Paragraph>
      </div>
      <div className="flex flex-col overflow-y-auto py-8">
        <Accordion.Root
          value={openItem}
          onValueChange={handleOpenChange as AccordionOpenChangeHandler}
          className="flex flex-col"
        >
          {renderAllItems()}

          <div className="mx-4 my-12 flex justify-center">
            <Button
              className="inline-block text-center"
              as={Link}
              href="#"
              variant="black"
              buttonIconStyle="ai"
            >
              Primary CTA
            </Button>
          </div>
        </Accordion.Root>
      </div>
    </div>
  );
};
