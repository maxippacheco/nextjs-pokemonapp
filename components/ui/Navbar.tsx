import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
   const { theme, isDark } = useTheme();


   return (
      <div
         style={{
            display: "flex",
         	width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            padding: "0px 50px",
            backgroundColor: theme?.colors.gray900.value,
         }}
      >
         <Image
            src={
               "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png"
            }
            alt={"pokemon"}
            width={70}
            height={80}
         />

         {/* PassHref para q Link reciba el href de nextlink */}
         <NextLink href="/" passHref>
            <Link>
               <Text color="white" h2>P</Text>
               <Text color="white" h3>okémon</Text>
            </Link>
         </NextLink>

         <Spacer css={{ flex: 1 }} />

         <NextLink href="/favorites" passHref>
            <Link>
               <Text color="white">Favoritos</Text>
            </Link>
         
         </NextLink>
      </div>
   );
};
