<script setup lang="ts">
const animated = ref(false)
</script>

<template>
  <v-btn icon class="ml-3">
    <button class="v-btn__inner v-btn__inner" @click="animated = true">
      <slot />
    </button>
    <div :class="['v-btn__inner v-btn__inner v-btn__inner--particles', {'v-btn__inner--animated': animated}]"></div>
  </v-btn>
</template>

<style scoped lang="scss">
// credits https://bewelge.github.io/CSS-Button-Particles/

.v-btn {
  --button-animated-color0: rgba(40.999999999999964, 181.99999999999991, 246, 1);
  --button-animated-color1: rgba(0,0,0,0);
  --button-animated-color2: rgba(0,0,0,0);
  --button-font-color: rgba(29, 29, 29, 1);
  --button-font-size: 16px;

  z-index: 1;
  position: relative;
  background: none !important;

  &__inner {
    z-index: 1;
    padding: 0em;
    font-size: var(--button-font-size);
    position: absolute;
    width: 90px;
    height: 90px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1, 1);
    background-color: unset;
    pointer-events: all;
    cursor: pointer;
    border-width: 0px;
    box-sizing: border-box;
    transition: box-shadow ease-out 0.3s, transform 0.1s ease-in;
    border-radius: 45px;
    box-shadow: 0px 0px 0px 5px rgba(0,0,0,0), 0px 0px 0px 9px rgba(0,0,0,0), inset 0px 0px 0px 0px rgba(0,0,0,0);

    &:active {
      transition: box-shadow ease-out 0.1s, background-size ease-in-out 0.1s,
      background-position ease-in-out 0.1s;
      box-shadow: 0px 0px 0px 0px var(--button-animated-color2),
      0px 0px 0px 5px var(--button-animated-color1),
      inset 0px 0px 0px 5px var(--button-animated-color2);
      transform: translate(-50%, -50%) scale(0.9, 0.9);
    }

    &:active ~ &--particles::after {
      animation: none;
      background-size: 0;
    }

    &:hover:not(:active) {
      transition: 0.1s ease-in-out all;
      box-shadow: 0px 0px 0px 8px var(--button-animated-color2),
      0px 0px 0px 14px var(--button-animated-color1),
      inset 0px 0px 0px 0px var(--button-animated-color2);
      transform: translate(-50%, -50%) scale(0.95, 0.95);
    }

    &--particles {
      z-index: -1;
      background: none !important;
      pointer-events: none;
      cursor: pointer;
      box-shadow: none;

      &::after {
        position: absolute;
        content: "";
        pointer-events: none;
        transition: background-size ease-in-out 0.5s,
        background-position ease-in-out 0.5s;
        background-repeat: no-repeat;
        overflow: hidden;
        left: -455px;
        top: -455px;
        min-width: 1000px;
        min-height: 1000px;
        transform: scale(0.25);
      }
    }

    &--animated::after {
      animation: v-btn__innerAnimation linear 0.8s forwards;
      background-image:
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%),
        radial-gradient(circle, rgba(40.999999999999964, 181.99999999999991, 246, 1) 45%, transparent 45%);
    }
  }
}

@keyframes v-btn__innerAnimation {
  0% {
    background-size: 63px 63px,41px 41px,23px 23px,50px 50px,57px 57px,52px 52px,42px 42px,39px 39px,68px 68px,67px 67px,16px 16px,32px 32px,47px 47px,43px 43px,20px 20px,24px 24px,47px 47px,17px 17px,68px 68px,37px 37px;
    background-position: 511px 482px,515px 505px,514px 524px,488px 517px,471px 516px,459px 516px,452px 515px,443px 506px,422px 479px,421px 466px,448px 477px,447px 457px,449px 439px,464px 435px,489px 444px,501px 444px,502px 439px,527px 464px,508px 451px,526px 481px;
  }
  3.3% {
    background-size: 51px 51px,31px 31px,19px 19px,41px 41px,46px 46px,44px 44px,34px 34px,32px 32px,59px 59px,58px 58px,13px 13px,27px 27px,40px 40px,36px 36px,16px 16px,20px 20px,38px 38px,14px 14px,55px 55px,31px 31px;
    background-position: 607px 533px,600px 561px,572px 597px,506px 580px,492px 601px,429px 612px,418px 587px,389px 545px,373px 508px,340px 466px,356px 473px,384px 426px,406px 352px,444px 346px,492px 380px,532px 350px,567px 373px,595px 389px,599px 421px,616px 489px;
  }
  6.6% {
    background-size: 41px 41px,24px 24px,15px 15px,34px 34px,37px 37px,38px 38px,27px 27px,27px 27px,50px 50px,49px 49px,10px 10px,22px 22px,33px 33px,31px 31px,13px 13px,17px 17px,30px 30px,12px 12px,44px 44px,26px 26px;
    background-position: 659px 563px,645px 594px,604px 638px,518px 621px,504px 651px,415px 665px,400px 630px,358px 571px,343px 528px,298px 469px,308px 472px,350px 411px,385px 310px,434px 302px,494px 344px,549px 303px,602px 341px,631px 352px,650px 409px,665px 496px;
  }
  10% {
    background-size: 33px 33px,19px 19px,12px 12px,28px 28px,30px 30px,32px 32px,21px 21px,22px 22px,43px 43px,42px 42px,8px 8px,18px 18px,28px 28px,26px 26px,11px 11px,14px 14px,24px 24px,10px 10px,36px 36px,21px 21px;
    background-position: 687px 582px,669px 613px,621px 662px,526px 648px,512px 681px,409px 695px,392px 655px,342px 588px,327px 543px,277px 474px,284px 473px,332px 405px,376px 292px,430px 282px,496px 325px,559px 282px,621px 327px,649px 335px,677px 406px,691px 502px;
  }
  13.3% {
    background-size: 27px 27px,15px 15px,10px 10px,23px 23px,24px 24px,28px 28px,17px 17px,19px 19px,37px 37px,36px 36px,6px 6px,15px 15px,23px 23px,22px 22px,9px 9px,11px 11px,19px 19px,8px 8px,29px 29px,18px 18px;
    background-position: 703px 594px,683px 626px,630px 677px,532px 667px,517px 700px,407px 714px,387px 672px,333px 600px,318px 554px,267px 479px,271px 476px,321px 404px,371px 284px,429px 274px,497px 316px,564px 272px,632px 321px,660px 328px,694px 407px,707px 507px;
  }
  16.6% {
    background-size: 22px 22px,11px 11px,8px 8px,19px 19px,19px 19px,24px 24px,13px 13px,15px 15px,32px 32px,31px 31px,4px 4px,12px 12px,19px 19px,19px 19px,7px 7px,9px 9px,15px 15px,7px 7px,23px 23px,15px 15px;
    background-position: 712px 604px,691px 635px,636px 688px,536px 680px,521px 714px,406px 727px,385px 684px,327px 609px,312px 564px,261px 485px,263px 479px,315px 404px,369px 282px,428px 271px,498px 311px,567px 269px,640px 320px,666px 326px,704px 410px,717px 513px;
  }
  20% {
    background-size: 18px 18px,9px 9px,7px 7px,16px 16px,16px 16px,20px 20px,11px 11px,13px 13px,27px 27px,27px 27px,3px 3px,10px 10px,16px 16px,16px 16px,6px 6px,8px 8px,12px 12px,6px 6px,18px 18px,12px 12px;
    background-position: 719px 611px,697px 643px,640px 696px,539px 691px,524px 724px,406px 736px,383px 694px,323px 617px,308px 572px,257px 490px,258px 482px,310px 405px,368px 282px,428px 270px,499px 308px,570px 268px,645px 321px,670px 326px,712px 413px,723px 517px;
  }
  23.3% {
    background-size: 14px 14px,7px 7px,5px 5px,13px 13px,12px 12px,17px 17px,8px 8px,11px 11px,23px 23px,23px 23px,3px 3px,8px 8px,14px 14px,13px 13px,5px 5px,6px 6px,10px 10px,5px 5px,15px 15px,10px 10px;
    background-position: 724px 618px,701px 649px,643px 703px,542px 701px,526px 733px,406px 745px,382px 702px,320px 624px,305px 579px,255px 495px,254px 486px,307px 407px,368px 283px,428px 270px,500px 306px,572px 268px,649px 322px,673px 327px,717px 417px,729px 522px;
  }
  26.6% {
    background-size: 11px 11px,5px 5px,4px 4px,10px 10px,10px 10px,15px 15px,7px 7px,9px 9px,20px 20px,20px 20px,2px 2px,7px 7px,11px 11px,11px 11px,4px 4px,5px 5px,8px 8px,4px 4px,12px 12px,8px 8px;
    background-position: 728px 624px,704px 655px,646px 709px,544px 710px,528px 741px,407px 752px,382px 709px,318px 631px,303px 586px,253px 500px,251px 489px,304px 410px,367px 285px,428px 271px,500px 305px,573px 268px,652px 324px,676px 328px,722px 421px,733px 527px;
  }
  30% {
    background-size: 9px 9px,4px 4px,3px 3px,8px 8px,8px 8px,12px 12px,5px 5px,7px 7px,17px 17px,17px 17px,1px 1px,6px 6px,9px 9px,10px 10px,3px 3px,4px 4px,6px 6px,3px 3px,9px 9px,7px 7px;
    background-position: 732px 630px,707px 661px,648px 715px,546px 718px,529px 749px,407px 759px,381px 716px,316px 637px,300px 593px,251px 505px,249px 493px,301px 412px,366px 286px,428px 272px,501px 303px,575px 269px,655px 325px,679px 330px,726px 424px,737px 531px;
  }
  33.3% {
    background-size: 7px 7px,3px 3px,3px 3px,7px 7px,6px 6px,11px 11px,4px 4px,6px 6px,14px 14px,14px 14px,1px 1px,5px 5px,8px 8px,8px 8px,2px 2px,3px 3px,5px 5px,3px 3px,8px 8px,6px 6px;
    background-position: 735px 635px,710px 666px,650px 721px,547px 725px,530px 755px,407px 765px,380px 723px,314px 643px,298px 599px,249px 510px,246px 496px,298px 414px,366px 288px,428px 273px,501px 303px,576px 270px,658px 327px,681px 331px,730px 427px,741px 536px;
  }
  36.6% {
    background-size: 6px 6px,2px 2px,2px 2px,6px 6px,5px 5px,9px 9px,3px 3px,5px 5px,12px 12px,12px 12px,1px 1px,4px 4px,6px 6px,7px 7px,2px 2px,3px 3px,4px 4px,2px 2px,6px 6px,5px 5px;
    background-position: 738px 641px,712px 671px,651px 727px,548px 732px,531px 762px,407px 772px,379px 729px,312px 649px,296px 605px,247px 514px,243px 500px,295px 416px,365px 290px,428px 274px,501px 302px,577px 271px,661px 328px,683px 333px,734px 431px,744px 540px;
  }
  40% {
    background-size: 5px 5px,2px 2px,2px 2px,5px 5px,4px 4px,8px 8px,2px 2px,4px 4px,10px 10px,11px 11px,0px 0px,3px 3px,5px 5px,6px 6px,1px 1px,2px 2px,3px 3px,2px 2px,5px 5px,4px 4px;
    background-position: 740px 646px,714px 677px,653px 732px,550px 739px,532px 768px,407px 778px,378px 735px,310px 655px,294px 611px,246px 519px,241px 503px,292px 419px,364px 291px,428px 275px,501px 301px,579px 272px,663px 330px,686px 335px,737px 434px,747px 544px;
  }
  43.3% {
    background-size: 4px 4px,1px 1px,1px 1px,4px 4px,3px 3px,6px 6px,2px 2px,3px 3px,9px 9px,9px 9px,0px 0px,2px 2px,4px 4px,5px 5px,1px 1px,2px 2px,2px 2px,1px 1px,4px 4px,3px 3px;
    background-position: 742px 650px,716px 681px,654px 738px,551px 746px,533px 774px,407px 783px,377px 741px,308px 661px,292px 617px,244px 523px,238px 506px,289px 421px,363px 293px,427px 276px,502px 300px,580px 273px,666px 331px,688px 337px,740px 437px,750px 548px;
  }
  46.6% {
    background-size: 3px 3px,1px 1px,1px 1px,3px 3px,2px 2px,5px 5px,1px 1px,3px 3px,8px 8px,8px 8px,0px 0px,2px 2px,4px 4px,4px 4px,1px 1px,1px 1px,2px 2px,1px 1px,3px 3px,2px 2px;
    background-position: 744px 655px,718px 686px,656px 743px,552px 752px,534px 780px,407px 789px,377px 747px,306px 666px,290px 622px,242px 527px,236px 510px,286px 423px,362px 294px,427px 276px,502px 299px,581px 273px,668px 333px,690px 338px,743px 440px,753px 552px;
  }
  50% {
    background-size: 2px 2px,0px 0px,1px 1px,2px 2px,2px 2px,5px 5px,1px 1px,2px 2px,6px 6px,7px 7px,0px 0px,2px 2px,3px 3px,3px 3px,1px 1px,1px 1px,1px 1px,1px 1px,2px 2px,2px 2px;
    background-position: 746px 660px,720px 691px,657px 748px,553px 758px,534px 786px,407px 795px,376px 752px,304px 671px,288px 628px,240px 532px,234px 513px,283px 426px,360px 295px,426px 277px,502px 298px,582px 274px,671px 334px,692px 340px,746px 443px,756px 556px;
  }
  53.3% {
    background-size: 2px 2px,0px 0px,0px 0px,2px 2px,1px 1px,4px 4px,1px 1px,2px 2px,5px 5px,6px 6px,0px 0px,1px 1px,2px 2px,3px 3px,0px 0px,1px 1px,1px 1px,1px 1px,2px 2px,2px 2px;
    background-position: 748px 665px,721px 696px,658px 753px,553px 764px,535px 792px,407px 800px,375px 757px,303px 677px,286px 633px,238px 536px,231px 517px,280px 428px,359px 297px,425px 278px,502px 298px,583px 275px,673px 336px,694px 342px,749px 446px,758px 560px;
  }
  56.6% {
    background-size: 1px 1px,0px 0px,0px 0px,1px 1px,1px 1px,3px 3px,0px 0px,1px 1px,5px 5px,5px 5px,0px 0px,1px 1px,2px 2px,2px 2px,0px 0px,1px 1px,1px 1px,1px 1px,1px 1px,1px 1px;
    background-position: 750px 669px,723px 701px,659px 758px,554px 770px,535px 797px,407px 805px,374px 763px,301px 682px,284px 638px,235px 540px,229px 520px,277px 431px,358px 298px,425px 278px,502px 297px,584px 276px,675px 337px,697px 343px,752px 449px,761px 564px;
  }
  60% {
    background-size: 1px 1px,0px 0px,0px 0px,1px 1px,1px 1px,3px 3px,0px 0px,1px 1px,4px 4px,4px 4px,0px 0px,1px 1px,2px 2px,2px 2px,0px 0px,0px 0px,0px 0px,0px 0px,1px 1px,1px 1px;
    background-position: 752px 674px,724px 705px,660px 763px,555px 776px,535px 802px,407px 811px,373px 768px,299px 687px,282px 644px,233px 544px,227px 524px,274px 433px,356px 299px,424px 279px,503px 296px,586px 276px,677px 339px,699px 345px,754px 452px,763px 568px;
  }
  63.3% {
    background-size: 1px 1px,0px 0px,0px 0px,1px 1px,0px 0px,2px 2px,0px 0px,1px 1px,3px 3px,3px 3px,0px 0px,0px 0px,1px 1px,1px 1px,0px 0px,0px 0px,0px 0px,0px 0px,1px 1px,1px 1px;
    background-position: 753px 678px,726px 710px,661px 768px,555px 781px,536px 808px,406px 816px,373px 773px,298px 692px,280px 649px,231px 548px,224px 527px,271px 436px,355px 300px,423px 280px,503px 296px,587px 277px,680px 340px,701px 347px,757px 455px,765px 572px;
  }
  66.6% {
    background-size: 0px 0px,0px 0px,0px 0px,1px 1px,0px 0px,2px 2px,0px 0px,1px 1px,3px 3px,3px 3px,0px 0px,0px 0px,1px 1px,1px 1px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
    background-position: 755px 683px,727px 714px,662px 773px,556px 787px,536px 813px,406px 821px,372px 778px,296px 697px,279px 654px,229px 552px,222px 531px,268px 438px,354px 301px,422px 280px,503px 295px,588px 278px,682px 342px,703px 349px,759px 458px,768px 576px;
  }
  70% {
    background-size: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,2px 2px,0px 0px,0px 0px,2px 2px,2px 2px,0px 0px,0px 0px,1px 1px,1px 1px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
    background-position: 757px 687px,728px 719px,663px 778px,556px 792px,536px 818px,406px 826px,371px 783px,295px 702px,277px 659px,227px 556px,220px 535px,266px 441px,352px 303px,421px 281px,503px 294px,589px 278px,684px 343px,705px 351px,762px 461px,770px 580px;
  }
  73.3% {
    background-size: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,1px 1px,0px 0px,0px 0px,2px 2px,2px 2px,0px 0px,0px 0px,1px 1px,1px 1px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
    background-position: 758px 691px,729px 724px,664px 783px,557px 798px,537px 823px,406px 831px,371px 788px,293px 706px,275px 663px,225px 560px,218px 538px,263px 444px,351px 304px,420px 281px,503px 294px,590px 279px,686px 345px,707px 352px,764px 464px,772px 584px;
  }
  76.6% {
    background-size: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,1px 1px,0px 0px,0px 0px,2px 2px,2px 2px,0px 0px,0px 0px,0px 0px,1px 1px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
    background-position: 759px 696px,731px 728px,665px 787px,557px 803px,537px 828px,405px 835px,370px 793px,292px 711px,274px 668px,224px 564px,216px 542px,260px 446px,349px 305px,419px 282px,503px 293px,591px 280px,688px 346px,709px 354px,767px 467px,774px 588px;
  }
  80% {
    background-size: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,1px 1px,0px 0px,0px 0px,1px 1px,1px 1px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
    background-position: 761px 700px,732px 732px,665px 792px,557px 808px,537px 833px,405px 840px,369px 798px,291px 716px,272px 673px,222px 568px,214px 545px,257px 449px,347px 306px,418px 282px,503px 292px,592px 280px,691px 348px,711px 356px,769px 470px,776px 592px;
  }
  83.3% {
    background-size: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,1px 1px,0px 0px,0px 0px,1px 1px,1px 1px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
    background-position: 762px 704px,733px 737px,666px 797px,558px 813px,537px 838px,405px 845px,369px 803px,289px 721px,271px 678px,220px 572px,212px 549px,255px 452px,346px 307px,417px 283px,503px 292px,593px 281px,693px 349px,714px 358px,771px 473px,778px 596px;
  }
  86.6% {
    background-size: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,1px 1px,1px 1px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
    background-position: 763px 709px,734px 741px,667px 801px,558px 818px,537px 843px,405px 850px,368px 808px,288px 725px,269px 682px,218px 576px,210px 553px,252px 455px,344px 309px,416px 283px,503px 291px,595px 282px,695px 351px,716px 360px,774px 476px,780px 600px;
  }
  90% {
    background-size: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,1px 1px,1px 1px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
    background-position: 764px 713px,735px 746px,668px 806px,558px 823px,538px 847px,404px 854px,367px 813px,287px 730px,268px 687px,216px 580px,208px 556px,249px 457px,342px 310px,415px 284px,503px 291px,596px 282px,697px 353px,718px 362px,776px 480px,782px 604px;
  }
  93.3% {
    background-size: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
    background-position: 766px 717px,736px 750px,668px 810px,559px 828px,538px 852px,404px 859px,367px 817px,286px 735px,266px 692px,214px 584px,206px 560px,247px 460px,341px 311px,414px 284px,503px 290px,597px 283px,700px 354px,720px 364px,778px 483px,783px 608px;
  }
  96.6% {
    background-size: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
    background-position: 767px 722px,737px 755px,669px 815px,559px 833px,538px 857px,404px 863px,366px 822px,285px 739px,265px 696px,212px 588px,204px 564px,244px 463px,339px 312px,413px 284px,504px 290px,598px 283px,702px 356px,722px 366px,780px 486px,785px 612px;
  }
  100% {
    background-size: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
    background-position: 768px 726px,738px 759px,670px 819px,559px 838px,538px 862px,403px 868px,366px 827px,284px 744px,263px 701px,211px 591px,203px 567px,242px 466px,337px 314px,412px 285px,504px 289px,599px 284px,704px 358px,724px 368px,783px 489px,787px 616px;
  }
}
</style>