# CodeLearn Web Platform

Welcome to CodeLearn, your ultimate resource for comprehensive programming knowledge and a thriving community for collaborative learning.

## Overview

CodeLearn is a web-based project that houses a rich repository of articles spanning various programming topics. Our platform is designed to equip learners with in-depth knowledge while fostering a sense of community through an interactive forum.

## Features

- **Diverse Knowledge Base:** Explore a vast collection of articles covering a wide range of programming subjects. From beginner-friendly tutorials to advanced concepts, CodeLearn is your one-stop destination for continuous learning.

- **Interactive Forum:** Engage with a dynamic community of developers on our forum. Pose questions, share insights, and collaborate with fellow learners to overcome programming challenges. Our community is here to support your growth.

- **User-Friendly Interface:** Experience a visually appealing and intuitive user interface that ensures seamless navigation. The design is crafted to be both eye-catching and approachable, creating an environment that resonates with programmers of all levels.

# Table of Contents
* [Installation](#installation)
* [Project Structure](#project-structure)
* [Demo](#demo)
* [Contact Information](#contact-information)

## Installation
Follow these steps to set up CodeLearn on your local machine:

### Setting Up the Development environment

Before you begin, ensure you have the following installed:

- Visual Studio Code
- Node.js (version 16 or higher)
- npm (comes with Node.js installation)
- Prettier Extension

### Creating a React App

We can use Vite because it's much faster and gives us small bundle sizes:

- To create an app using Vtie we use `npm create vite@latest`
- Next we need to specify project name `codelearn-app`
- Next we select a framework `React`
- Select language `TypeScript`
- Next we go to codelearn-app by using `cd codelearn-app` and install all the third party dependencies by using `npm i`
- Finally, run web with `npm run dev`

### Creating a React Components

In React, each component typically consists of two files: a .tsx file for the component's JavaScript/TypeScript logic and a .css file for its styling. This separation allows for clean code organization, where the .tsx file handles the component's functionality, and the .css file manages its visual styling.

Start by creating a new file for your component in the `src/components` directory. For example, to create a `Article` component:

- Main Components of Article.tsx:
  1. Imports:
**React:** Provides the functions and components necessary to build a user interface.
**./article.css:** Defines the styling for the Article component.
  2. Interface:
**ArticleProps:** Defines the properties that must be passed to the Article component.
  3. Component Definition:
**Article:** A React functional component that renders the article content.
  Takes ArticleProps as input.
  Defines a variable maxLength to limit the displayed text length.
  4. Rendered Elements:
  A container element with class fullArticle.
  Inside the container:
**headArticle:** Contains the title and author/date information.
**bodyArticle:** Shows the preview text and image
  5. Export:
  Makes the Article component available for other modules to use.

  ![Article TSX](https://lh3.googleusercontent.com/pw/ABLVV86XOkWETjbsrW9eJ93ROKTwD-yFFZy0qm7vz9-Byx2BUOAYR3fonVJvNgAn-anwmdnP6hwa8bekriS9iZNdMhOAgrchM1NZLWFEN1GZLxGVBRiDnN6hhPc7yA8IAhqjDBikew5KnkTI0SE-PQtfEcX52tZIlhO5Sn4d27pUG1vKkNcV3Fu14iCxeS3GYTt0pBR0VnBFmGpxDm8fvMqXnoUWCyAMzlabG9yKh2DGHFuaH46cuIcp39Nppi2aKVjTlvw1L-yldK3lXPXOfO4MgBF98681T6KvM6ZQ3NBSZ9FtMWZyEPxamL-GdLp6BD6Oas_C5QVbkm8wuxmkRDWpuv-hZhW8uEdwkumP4MmpFAbZQrWUFAIb4Kc4ejzKKq4n_B5Wy9lECigpJLR7jsmfPIdUysvN1XZHb3rJOeeVdom2N8ggdgw9FSAzym4yI41W5RfIwrU8fSts2VxGQxHIwi1J0OgEgR3rMmVKC--Vopd6VyAvu_a8_TMIoG8uUU7lhcR3tQiS6jr4prwyl2VwLOdPI8fk_KZ9Ud_ZN85gCALXJVPQMkJyHF1QP9ljpm8lplMkcOpKt8KAvudN2_uoHWudlQdXuOQm8IH6rj7WSv2QhTayzjdCyW0C0qAHmfmGVkb_tbfhrdzxiMbfhVv7MZr6assol6Fna1szcLWB53zo_43j2xRj0i9arAZtzPoA8DM5puG8wp9NH_IXjSWM8R3JaABdeAQYi8MaC2RVoRwWuOQGGbVtwlA1CS78ZVwsh2XhjHUbHjE9II_W-x0gNk09RX9BkTdYreXLBVwMHWAuwyEqIpWi6uzBa4EWLryknNyRj1EUB-2qBE23ByHjrp2JeN6yXLxtAndntty5DIf3U_J2LHSLIN0BEjSxI1GW5E5t=w570-h970-s-no-gm?authuser=0)

- Main Components of Article.css:
  This CSS file is a text file that contains style rules for HTML elements. It is used to control the appearance of a web page, such as the size, color, and position of elements.
  This CSS file is typically organized into two sections:
  **Selectors:** These are rules that specify which HTML elements the style rules apply to.
  **Declarations:** These are rules that define the properties of the HTML elements.
  
  ![Article CSS](https://lh3.googleusercontent.com/pw/ABLVV875jaxlTUR9XgZz4rTLVUfcYTu0ccshzYFE05NLHVNJ8bcKo-8LRhDcSJLkUyu1Hohq23bOY4voWiuEpmb0SqCw7MpSxJM1GeWX6Ue3MBvuxIOfLZSt78jooiTxH4mH6_n_6UD9ad5KcFPnvAPrFGpDTXNUIMj2p3W1KoXN_O6oCnzSbEp5SKgxzAQ8YCph1MDCiKuiewZ0oJLWC2ukOBNAto99hj-d8vd0YJLRwqVXvwTCWOPQU0om1nCulvFClv4pMSqoaU9dDZsf5pBsn5opFMJYOUd8wDAutuNFHEkbzpkp24e3UCCv7lGZze2EU7McWHxWDbF4WylEHxtwNVMVdIjeK71Ilncj9PBSQkoNxQh2MJLMj4H25D8LRlZM8IGugPXJkOQP2ijugxaErK-UwURamdxjhaUB7me5wnGvj92L1DeZkBlGgdCv-HcD3Dde4od9zBVs8r-guPGBodZnVheqc_lu7Gobi6bb92PTCqP_XNYYfRwbFA_k647OQhdrh5a4E7fzncpyABzUwobhBgZYJif1kWU3_6WtplCMKYLNCS6yU9BCmO0YqKYcLAw7QbOg1a_-udhuiKA-QHcMk7HGyYiwbigA-Ok88x1B_WWN1XdV9GERHwyZfrS6IJgmuqmwOMJzBM-CnLiEK1rfruOhBepcRYMcIjfOQKkV32XEKYEgokzEsiaA34ykPQgEOdJjFI62HXkh0zR2K_Mqay37X_bot1c3UmVIoRkDUNOXdHQBP64AfQH0QmAciXJwXhOlm80fnBXQuFzIvtiscto2_95z960voOdSakyE1WQfgBaTT9l4LfK8SuXPQkj2rLjZ6YXun_wzpKyaeFkB4eNP_Nc7hAig4JgZRYgBI5_TdYBoHoM2Mk3pOz6qS5ON=w511-h816-s-no-gm?authuser=0)

## Project Structure

The project is organized in the following structure:

- Node modules folder is where all the third-party libraries are installed

![Node modules](https://lh3.googleusercontent.com/pw/ABLVV86fF6ZuAQwi7CabJqSCVLABHG-CKa0YY8NqYMjX_PgYRqXx6nIggy1tLC8_r5Dp07SmUpo7SjlSkXIXOxWTVVzyvh1c4Ms5aI1qdBaeI1PWrEDxzMhaxl52Df6E4xD-UCVVRbbkad0HsGGJ-EMnSpV5JFWPBPdKkrTkwUPUqe7Lmw8UCoenEw_V6b07ht86CfSYQMXWZGJklmhqzSnqY3dBOI3mHHHg-KWya4mwyfjijrD54i6GnupaecZbOayfNhhCqoUrMYlnel0_OsCsyDZrXH25iVsyHCiMBOqo_kGbtX2yQOQI-Xu-GK3jfdXtnE9Ww5PbC8NmfaBgR9LyNnzzjJ_BGifXSXNoZ_QTR28PZM5yqoYJPY6RcN_U6UBL25tvf0ymG0YCMgTmmUqLF76K5Qm_KB6yZD1Q3jhqA_azMXl3NHddI4Q1uB-Ol91AgZS6jO3lFF9Zo_JPFDUwsWZxM7oF3xkbDiKDcUqtRS0nvAmASOP2vcKbVTxCSOrAJoD83QSmms3yHOVuugAyOSCZbmhTgfGKsHXrws4FKLSCNpf0-U97heakh5eeeQRiJ2jZXxa0qTpDYg_uJ9GtsHG8-NXMsUEIrOQTg39fb52nDyxmoFc81gFe-ycFa44FGVGS6KMp0J4rphUMWE-TLFdZo0vhtHxF3VlgaFoM0TE7L-_kvnx6P9FZ_k2FyJ9HWZcQSVUH_CyQcHQ7Xd0r7gTOk2jS3i1Y-Mb58zi63Kb-TvkWBTKp46TfVhq7X-eedJY0VHspVZChhTM4MJvtH1ZiP0NEMFED4BifAlCpg2rYOf4qEJ4cv0T_jBqM4NFNdrib5VJTSHMivoEJN21XNtG1osF2CR3NEZRqmgDf9z6jEAsFrPa5eqRYB2TMOc1BG0sH=w323-h344-s-no-gm?authuser=0)

- Source folder is a source code of our application

![Source folder](https://lh3.googleusercontent.com/pw/ABLVV86O1WTEQIeuJFzMbCLOU9eXCdsyBK6lyb8TpeLgJ4zZfdwA2zsvwuDDG88ZyjQP1LsJmdVLqfNUNt6yqC9M40ySoeytDPuBqyIlQ8i2HYa6rXxXzwJqyH4atzXM2UO-wIplufsg289MyGxui3uqNjFqVH86n_xOq6faKd2lMvH4A_0oFiu0bQIl6CQdMNc5mpI3q8NN3NGnY9Xj5bmAtvgnKfZyKIXbmpMfi1ZDRUOO6oUE1fm90JsVvh2-Kmu9HMpm22rwWbOJQLErGd03o90WnmEwFqo45fx-xg34tIg4FWudIkrXlZBufw1TF4idWRh_Ox0EByxJ4xKnNEWB5_s4e-qZulGDe6fx9YYjr56mALhXJbE7NO5UIfcOlZXRWy2genxQwgtmEODoTBUvj0LswSJiHvjHQ0WcjfG_7A7rsFwlREqJFRGFrd1FuQVuGTRJUF7w2IcJkmcCx3Uye84GaPmHlpVc7mJB1nKFM3ympz2ucRnXgVNrhgG0SbNChMamORKKXCrMHCt675PC8GZFDyD6xW_jJXaza6pAYKYaMoJbJB-G3AzRLESPX2DrYAyrV-jjpRXXOaf1Rbwlkno7QWTWAYgA3HRNY35SCkpf1NLc_fqSXPE8oCzLAp2VGvckAGDyKEH7tKaFMB32VWRtrOLNIzRTQujlM9kNfhCiJHR1WE7br6SzJgUDCh-60t9Ey4h6-KcpgUKpY1KoCDkOZqu8vAOBeo6Zin5gGra4f9PYUFjV5IgyF5aJgXtqjKBC2g2lYLIYcR853lziWlSlz1uGbqro-1CwzofBLcpjVFySLyTbrB6A9g4IjYY9NhMnbs4regcIROifaxpoULmBFIn-belTsHOe3Q-QldqRsUgZnGzfJSnhOJcgA54rUo5u=w236-h244-s-no-gm?authuser=0)

- We have a component called the App Component

![App Component](https://lh3.googleusercontent.com/pw/ABLVV87btE-mCECOnYbtKR3Bjdve7jEkmX9sk7Yugd9Q79HsclT1DTi-xTQUfWXKVdIoLdjGdIuSMYZ4gZp0nZKS93BTuvKN_scXqIs5rgFqqxGDCmjHRNGBu5pD3Q8XjUIMp__lKnSI8jrTR0mDoYff3uGnLZszCBoA0xtAoj-TSOQG9UET05h_Vu4gaMRISCzXARzyX3U3IB5Ge9XeHa2Yti0bGxXgHZXGlm27BrMjrb36YmfME2BezPlGsCil0SwHMLJJlY7tvrvEKu5_owEdyVWYSGVpwPWdcMWJvJQWztwQ9S8zSKhxwRfAybwZ9NxbauZkmvyk9vDDPZ60jdO-MzF5OynMVCxVl-pDoA9XHBNfCK6Mv9db6YtaTLlnz664RlklK3osmbQ2Fmpfhwl4Cw5DU8mn2ioKjcHiBANzS2_UoD79g2mYy2PddCu6ecadV93m4QHdEy3enZXzoZj2uS7BWyLySAzIBLrd7VXhipD4hovMXWpBPBuwI9Vi7--o1AHUuci0vaqZhbGgd4k42i2JhwwxbN3yvNtGYy7Z87tujxXZRQu2ZWn5BMUfGiGRP4CfZ7wJadyYAwkGn68gmgf6yxFpknfl6WgJ7Df3aCS9VOSDUUao-dYTfcm3WKW1kNWncZ2TiTU59CSDqSTUvxg15uAv8SiXTE4SAP_wMYD40hf5ts43AxeRMl-L03AVBpGa9qDXvK6RfMX3nydjQgWrGQI0QPcFQJM-3YeyLPLozScsd9zlR5SR1BK-heQIxtE1qJxAqyhn-gQvp94CH6uNTHX5rDnr7MeWWdCdaW7kXvU3FV8J88dPJovYX3D62YFxTYZTymxKThZ7YTbDpVgeyfEG1L-LcPepEKBmSL5gRby0tdT1UTNtPbJEAa_-oGt0=w166-h154-s-no-gm?authuser=0)

- The package.json file contains the information about the project

![Package JSON](https://lh3.googleusercontent.com/pw/ABLVV86AVny_M-_GRugzu4dipW8hdDbHg5eIs1M0fZIs0H_2a-1C3BzMQ_gCnPwtD-0VYU716yzuSQ3To5KscC0OkTQ6meCblaq7ctogs3lzaTkM1QBTPd7fZRqQ9UtEqu2O8L35Tx7CzV3uHpEkaEKytJJhVGYZxx4tognQvnsnvZ0dONcrFHUzhEkNfSaRaYVgDPjzxBTmSx9xWK3Wsf6oXr1finGMKcJYMrHX7sz-zEvKxScXaB8eZvKwg4kfXxhJ6rtDmyR5lFjPRMeb3reAPf84U6LlAT4pxUgW3EYIKyjzY2mIB35UE1AZrnwTVshbTqFJ5c83wrRy2C2sI_GfyDPeKIjZM2j03hw7rtZ_MBgv_QUymsDtdFB87Usr8XAhsfc9YP8UuFGxwhkHLFSnnItpgBr1NzIKIW3jivTbuO2K1-NZ_ApG2caD-NPc3FVPJCYqlyeRQWkVU_1h9SMRnkiqWG_wy5YEXrVe78Z_pyeJK3UdonSJTIpnYtK82laK4-mpFI7ZsCB0f3DTBBVpw5CAkg2P2DXQ8MYQOF00lAvjsrK5CNLidL6dPPwlML_RvFkaLLvtYbv8b1yVbtcb-wI-VAIN7DrjlD8FCPqk1A7rjSCHFJwgplEFOa6xLAB-euLdR-TUT0zg6C9GQMzvuXNvw9CI82KXWrGA7F5EPuS2FhDHgR-hXcB5tIyUmJwWyom78Wlt79YRjKIA9ty0rwFRZozNPd9SPUXhdBeyBKZqp55lC4JsfdInK1ceTrx7EDSrZm1-CB4UBfw7djgpsdMKV0nVVS758k7Q81Yf1SKnsVLG4cB5OsMealuRVeY7M2-OtNwy2ZNVLQSTdZu50UHwcbpiYTzqAkJb7-sKiIIZCUhlaysEf4ErNj3CGPiPnlJL=w958-h690-s-no-gm?authuser=0)

- Typescript Configurationfile is a bunch of settings for telling typescript compiler how to compile our code to JavaScript

![Typescript](https://lh3.googleusercontent.com/pw/ABLVV86g295JtD4mttkSbMRLrk_IDtng49lwBtuK7YiD6zDycgetZWJ83ZgZfVeHpScEDxPqc7By5AnaNM7AQeSUl3ZBV1-R5oTC5HCpwjGWuA3q0Cgnq5H33VtO-e4qLtHVQQOqXrrxRTOtyIbH1iITI4A0SIGN3DsGNBK9yI_HbLKwOXoiW4ttsMTr8Fh7PPbyWpmBmyhntxki8ppLG7uIajemJbj3USrohEjZ7gCG0H3l-diFUTn2jtip4hPoqSRyq10umGVtXIBV3DQQr9fy9fMX20Vc2A23sIkqIvibKeiPg102eTm3HgMS4tsDzQfsie4FLjD3dslPs1R6ETOUpAoo9qKqg-E9-cNfV2qEj5r-nLOvtVukOECdDtdV2jMBuwrs2Zh4LmFQ-etaiyEoh3ZKiQ7eKb5mjPDZkHcnldY2a5rVsv1DVGMhLxmvOpMzHNw8_C7LTW0q0pXAivkhOnLPuOuxIM-hpZjVxveIl_CNf4JDL2t9TyP0WXP9nFPwEHEstBmfCdO8sMPLLy5dFYhVDUoez0qu0wje-yyO9PNKsQbjYs2wlc_s7VtqZdtZxKssJwzRIffQFk97iGc15fUsA0-KYiH6gpCmNRBbzVsaQ8vMWaJ817KQQ3PkqpDgU6VVU-zEupZxLSo8oq_wIm7yH7WG-_q90v1RcRmnp9TH2awRFzIVJHbL8XxTq2fHDTqxtfbOL3OQjzJNcOOpsOT9FtvyeYd0BtKZUASRZxLU8dfCR82wubHMxjvdVaY4pWyZ3MpoFYoJvvjnhUfXnV67RLfoRmcCsDt2LqiKGxlBfc-j81kiEPMowFuzxfIQiqbjyJCARVXfSYV2JgMeRpg0NleJDkobLWzp609LtYBwoPlNIU_klw_J8FWsKMvdSPhF=w815-h576-s-no-gm?authuser=0)

- Configuration file for Vite

![Vite](https://lh3.googleusercontent.com/pw/ABLVV84Fz-Hok3dOQ6do5t80AcTlOWDLLMC5KhyI-aq3QPRHV4vSYapIvNxnvJPmzICydohMGyDy38YZqAwAsdtG6-xWoRPrc4j6PLpGrDY9OF6wXEfkbN6Y30cq6BbNG4dnwI727N-m598zU6kG_z6o5550NhBjsX5C2uSAgXV4Fh6_i7e7p6AH7srq_Ky6PXZob8zof4u2jC4cElneL90uaL3Tkb1L13jS79Mt5hg1dc2XbJgeG3q5e3cH2XV3KMzYLQGU63U52WaZtCQrjzv0C2lHN0ppZNNU6YHJh6qXpbEzosk-51L61p99jDwvmk2e1mZBi7PNKtK03dLpxEdsFayz6c3ucpZXlJt8G_dRFAZsFO1XR0qSHBoG-hCUBXqG7th2r0elHU7BBlxZm6w-hJqyQCgfAkxs5lmGY8Rht0iLvpnWe-DKGgBk1bdQglkk1mfGG627_bxWP4T--1C-HsvIuGV2JWnCeFICb248NSsUkc_RVra7sB0_eNX89cIxCEDccc1bM7fLmsvZtV3pggt3VP_G4irV83jPqoN2CO7SukQNp39oiBl_Sq-x_z_fsCHILFveM2H6cCxe-i6RMJXPNBViZU6y6sQmtA6oIbkHMQWB0FfSXT2pb-3LyiOwWouFk1N8cGHzEDwK7ZSAh6ARzZaT-2lo72WU-Fms2qhbH72IlwsliDh9O9Qphi6rTld_Pb5KKDkuPue_PC5UiiXyMQ_P2baglIZCgB5urb_IH82ueSAy95h98QC3yEmIX_UtN4N_2wiWl4F6SCS36hpxkl3vdHt_LqdIz4HEOWmEA2-kW-tngVnYfeS_HIJWrp90LIuZX4hnTYCeH0oXrAey5mmbR_M1Cu3M4_QvpiRzrD7v6OTzBrs3PyEaqF96I-Ko=w792-h398-s-no-gm?authuser=0)

## Demo

- The codebase demonstrates best practices in React and TypeScript, showcasing the elegant implementation of the Article component.

![Web Demo Code](https://lh3.googleusercontent.com/pw/ABLVV86c8TF4VWxBtnFHLKRasW3ufaRNK8hsb2vG1hDYJBmqYt6Zj-Q0GuVN-6GFYxbVrPn_P9GyB_uCQzza_4KfPgRc388QIw7yZ4a1563_iexF5BlUyvK1IJZcFuBdZE9r-1yOAxSG4r3t4ZRbn0sx52QH9pK7Ib3EALi-3nnOlzf59rOCeZmcOkqtNmhd6XJvR0Q-qaYF_aEbkfg4p4RgmlGkZFxIxJho8lRY_SQq1jrz5BIq05bRox2zd8Qr5LFWrzEtLibCr78X4mc8xyC-CNAZlcYRS1M5RwQbUSvGdhaEQbuxUDhFnXgEBzVc75MlMAmZtccJS78j0BuIH-yAcDXtGBeNLIolgxKI5mwMxJYtPprcDi2Qo5gilgqTeUNBZVf9UHOBuITcZZCyGAV5Yn__pgKeG-LOMjuOwW4YvW5QQfONEUz_WrIQdUFgYES3y44PxoGHJw00GAtT9bsFaZPHBCUDPrRx7GdmzEInoX-WQ650uneFDYjTyuYldYwf1FP2e7Ky0BhlCJzdmjyT8axrK5bffvbMj_I9adZxnnHeyg7ZWmSaxZWNJq4BuGEbqy-QJEWUrihlIfsEq5hebGNPZj9rRTBNPJLsOdKKrmP-Yw8eRBl4IkxN7R9xFfSgR3BuoFiJc5aHjTrGsQ8QH0BbW84Oh5qalKxI9ToQhQHaIG2mcp6g86qmk69vWmHAbMG3vftIvBcX0tdZ_Wfws9HMUqvDoX-9CuEJbP30v_EdqOadOTKowFbv9-xLC7Y-Hlsy6XnUrc3wg4WqdpGK_dbCPtBCEuGTZpKhJD27wcMsEPFRKEZtmXSi_QU5NxRm3xeK8JqxdvCHZBgjZr7TZ4MXXHcGbF3mq-Ufq81VEhNfFJJeo6Qaehmvlnxn0PPrBbeB=w958-h588-s-no-gm?authuser=0)

- Experience the CodeLearn web application live! To run the application locally, use the command npm run dev to execute the main.tsx file for testing the code. After running the command, access the website to see the CodeLearn web application in action.

![Web Demo](https://lh3.googleusercontent.com/pw/ABLVV85Z5btspzYhOTSj6z9u5DusVSWujH6_zsvHqcxes_mk1pVyLo76T5X12AEuuGsP13cMxfgM23XqLgrEwXUJh1f3hM8Jw-i7XTlOygCRpvQ4jszX9Z9323MM8M2elAGAwOVonZhMeRPeGzAOdsmcFtFJ1ssdQ342bptTX1TD6EyARuh5Io47Wk3309ra1xmrCVKrsbCp1hc9CzITM89JRFGJmrV36eSGzoNVRuMvAnu1yLU2b3CsZ2qMVO0rWSxuvM-1LVL_gpshUxdj0QA-ZD0xODF4C6Vdl0MAiKLfPoWZeEObHsneyOueBoOHWd9DFbUcUvkhDga88guIcosG_rX-lRkFIxP4fKos1z5Yv7PQveKtQG3X2aGYNuU0BoM4G0VC8Xc8m4fVm26sYZ4ftv9j_YUW81vg5HQH4NQIGznmBcRvkaXjlo6FhXGOJaSJlBAtjYZd6Tj8Sg8T1ZdgwGAd15H2G1ld8-6Lfw0qQ3wrRP0oGblZaiHCl9ves3etlr5dMgJbvQQV2AVEkNveekND_DeXXerpVoEE8RD_Dj1A6koVx1uPBCfHHthMTiFw4-Qr_nbfiX7qsGaGjWcm2-O1kPwPJ1PJMrP55xRH8KcrslhFV9f6Q1DQ50JrvrtQ7y2XSzaMkvxHCTYLkbz1iIEEmYR8XfV3juc1SQguxdWuba8fSN8NVG-CXlm0015iT5RciLyP6UarS7CmU2Cdf2xznhirk6mOTVsS9NUJ_bPQIUvdnofl0bWTBQ_aIlKSJA-IIxEhXsDl2y6J6W_GK7oln1bYLM8RR3Dx6nxcQ6uGjAxrBANaHVmWxZNFviSf-ZXOoZTZISwYEqVBYBT79BOIzzD_X6LXxPdZgerH4dK1e8XOjdSPT_1NABfQqiyAKsMd=w920-h643-s-no-gm?authuser=0)


## Contact Information

Feel free to reach out to us if you have any questions or need assistance. We're here to help!

### Lê Thanh Tuấn
- **Email:** [21520518@gm.uit.edu.vn](mailto:21520518@gm.uit.edu.vn)

### Phạm Thái Bảo
- **Email:** [21520156@gm.uit.edu.vn](mailto:21520156@gm.uit.edu.vn)

### Lê Thị Huyền Trang
- **Email:** [21522694@gm.uit.edu.vn](mailto:21522694@gm.uit.edu.vn)
  
### Huỳnh Hoa
- **Email:** [21522080@gm.uit.edu.vn](mailto:21522080@gm.uit.edu.vn)
