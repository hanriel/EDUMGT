"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faDiagramProject,
  faChalkboardUser,
  faFolderTree,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={"file-chart-pie"} />;

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FontAwesomeIcon
                icon={faDiagramProject}
                className="mr-2 h-4 w-4"
              />
              Проекты
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="reports" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FontAwesomeIcon icon={faChartPie} className="mr-2 h-4 w-4" />
              Отчеты
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="epos" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="mr-2 h-4 w-4"
              />
              ЭПОС
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="files" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FontAwesomeIcon icon={faFolderTree} className="mr-2 h-4 w-4" />
              Файлы
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="rules" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FontAwesomeIcon
                icon={faFileCircleCheck}
                className="mr-2 h-4 w-4"
              />
              <span>Правила</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
