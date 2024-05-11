import Style from "./style";
import Logo from "../../../Images/logo.png"

export default function Footer (){
 return(
    <Style>
      <div className="container ">
        <div className="flex-holder flex justy-space gap-20">
        <div className="row">
          <div className="col-lg-4 col-md-4 sm-12">
          <div className="text-box flex flex-dir-column flex-wrap width border-line-right">
            <div className="line-one flex flex-wrap flex-dir-row align-items-center m-b-25 gap-10">
            <img className="logo size-img" src={Logo}/>
              <p> GapFilm </p>
            </div>
            <div className="gap-20 flex flex-dir-column">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <p>Lorem ipsum dolor sit amet</p>
              <p className="flex-nowrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
          </div>
          <div className="col-lg-4 col-md-4 sm-12">
          <div className="dow-app gap-10 flex flex-dir-column border-line-right ">
            <p className=""> Downlod App</p>
            <div className="align-items-center button gap-10 flex bg-bazar ">
              <svg className="border-icons" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="bazaar next-m2bho0"><path d="M10.519 20.5005H10.3443C10.1279 20.4827 9.91169 20.4632 9.695 20.4478C8.97553 20.396 8.27999 20.225 7.60501 19.9808C7.07512 19.7877 6.56535 19.5423 6.08311 19.2482C5.93534 19.1585 5.78637 19.0696 5.64586 18.9695C5.51164 18.8735 5.38419 18.7673 5.25891 18.6589C4.9912 18.4266 4.71308 18.2041 4.46495 17.9521C4.08212 17.563 3.72274 17.1479 3.43954 16.6775C3.21439 16.3029 2.9919 15.9246 2.80084 15.5318C2.64127 15.1949 2.50392 14.8477 2.38971 14.4924C2.24074 14.0463 2.11522 13.594 1.98971 13.1409C1.92102 12.8913 1.87894 12.6342 1.81824 12.3819C1.75681 12.1257 1.66661 11.8749 1.62477 11.6158C1.48692 10.7573 1.36624 9.8962 1.23782 9.0363C1.16527 8.55103 1.07845 8.06772 1.01533 7.58123C0.975666 7.2762 0.989451 7.09279 1.34907 6.90156C1.62574 6.75503 1.8891 6.57504 2.21075 6.53303C2.26081 6.52668 2.30749 6.492 2.35585 6.47417C2.44893 6.43604 2.54414 6.40342 2.64098 6.37649C3.12636 6.26097 3.60835 6.12787 4.10533 6.06755C4.69663 5.99599 5.28479 5.89806 5.87561 5.82113C6.12059 5.78913 6.26473 5.67875 6.32326 5.44185C6.33625 5.39924 6.35242 5.35769 6.37163 5.31754C6.49569 5.02033 6.6212 4.72384 6.74358 4.42589C6.87731 4.10034 6.99993 3.76991 7.14286 3.44901C7.28796 3.12151 7.43161 2.78961 7.61566 2.4836C7.81953 2.14511 8.06596 1.83251 8.30079 1.5138C8.34916 1.4481 8.44323 1.41611 8.49136 1.35041C8.6488 1.13379 8.86065 0.995561 9.09064 0.871009C9.23768 0.791393 9.43986 0.819478 9.53684 0.640952C9.5424 0.630939 9.56683 0.631916 9.58182 0.626055C10.0043 0.462427 10.4471 0.503944 10.8837 0.506631C11.2179 0.50834 11.5066 0.677586 11.7923 0.830468C11.9973 0.940612 12.2102 1.05246 12.3811 1.20657C12.6128 1.41538 12.8126 1.66106 13.0172 1.89869C13.3512 2.28651 13.5587 2.75566 13.7587 3.21749C13.9558 3.67149 14.1821 4.11964 14.2946 4.60955C14.3038 4.63192 14.3151 4.65335 14.3284 4.67353C14.4455 4.92728 14.5746 5.17638 14.6752 5.43648C14.7758 5.69657 14.9536 5.84311 15.2426 5.8475C15.2947 5.84798 15.3468 5.85116 15.3986 5.85703C15.8714 5.91662 16.3442 5.97425 16.816 6.03995C16.9611 6.06022 17.105 6.10271 17.2496 6.13397C17.6453 6.2197 18.0448 6.29101 18.4347 6.39505C18.6934 6.46367 18.9425 6.56991 19.1911 6.6759C19.3822 6.76097 19.5684 6.85677 19.7488 6.96286C19.9554 7.08033 20.0236 7.2696 19.9907 7.50015C19.9752 7.60858 19.9558 7.71628 19.9404 7.82472C19.856 8.41476 19.7677 9.0043 19.6896 9.59532C19.5701 10.5019 19.4318 11.405 19.2301 12.2974C19.1989 12.4361 19.1817 12.578 19.143 12.7145C19.0366 13.0965 18.9319 13.4792 18.8098 13.856C18.6622 14.311 18.4995 14.7608 18.3396 15.2114C18.2918 15.3533 18.2353 15.4919 18.1703 15.6266C18.0559 15.855 17.9365 16.0811 17.8076 16.3007C17.6796 16.5161 17.5415 16.7258 17.3964 16.9307C17.3178 17.0421 17.2124 17.1342 17.128 17.2419C16.9988 17.4067 16.8936 17.5941 16.7488 17.7423C16.4963 18.0002 16.2254 18.2403 15.9546 18.4789C15.6058 18.7863 15.2395 19.0706 14.8276 19.2892C14.5546 19.434 14.2866 19.5903 14.0053 19.7188C13.1194 20.1285 12.1693 20.3785 11.198 20.4573C10.9731 20.4746 10.7458 20.4861 10.519 20.5005ZM11.9978 5.64749C11.9978 5.65701 11.9978 5.66653 11.9978 5.67582C12.2186 5.6658 12.4397 5.65774 12.6605 5.6448C12.7758 5.63796 12.8036 5.57862 12.7572 5.47213C12.6563 5.24208 12.5533 5.013 12.4626 4.77879C12.2967 4.34652 12.1347 3.91107 11.889 3.51592C11.7439 3.28294 11.5939 3.05386 11.4537 2.81892C11.3789 2.69485 11.2418 2.65285 11.148 2.56053C10.8445 2.26234 10.2254 2.22815 9.90057 2.50241C9.7944 2.59203 9.67929 2.67067 9.56876 2.75517C9.55329 2.76714 9.53104 2.78302 9.5291 2.79889C9.51145 2.95715 9.37602 3.04311 9.30806 3.16791C9.13393 3.49004 8.95304 3.80972 8.8014 4.14284C8.60188 4.58073 8.42752 5.03034 8.24347 5.47531C8.19777 5.58594 8.22509 5.63186 8.3419 5.64626C8.3775 5.65215 8.41346 5.6555 8.44952 5.65628C8.84784 5.65359 9.24591 5.64749 9.64422 5.64675C10.4291 5.64561 11.2136 5.64586 11.9978 5.64749Z" fill="white"></path></svg>
              <span className="m-l-20"> BAZAR </span>
            </div>
            <div className="align-items-center button gap-10 flex bg-myket ">
              <svg  className="border-icons" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="myket next-m2bho0"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.01943 9.63458C2.0224 9.88807 2.02536 10.1416 2.02536 10.395L2.00332 10.3929C2.00332 10.6133 2.00371 10.8336 2.00411 11.0539C2.00515 11.63 2.0062 12.2058 2.00011 12.7817C1.9977 13.0107 2.03498 13.2233 2.17007 13.4203C2.52762 13.9431 3.24994 14.1816 3.8937 13.8419C4.34666 13.603 4.55389 13.2331 4.54949 12.7529C4.53981 11.7792 4.54071 10.8049 4.54162 9.83055C4.5421 9.31198 4.54258 8.7934 4.54147 8.27491C4.54147 7.92221 4.62164 7.58532 4.82206 7.28285C5.18122 6.74502 5.69791 6.39126 6.40941 6.25847C7.18665 6.11374 7.86488 6.28552 8.45091 6.72956C8.98805 7.13636 9.24218 7.66365 9.23737 8.29318C9.23246 8.96357 9.23312 9.63397 9.23379 10.3043C9.23437 10.8926 9.23495 11.4808 9.23176 12.0689C9.22976 12.377 9.33157 12.6447 9.55765 12.8741C9.96331 13.2837 10.482 13.3771 10.9654 13.1997C11.5158 12.9984 11.792 12.6134 11.7855 12.0661C11.7769 11.3512 11.7777 10.6366 11.7785 9.92209C11.7791 9.38376 11.7798 8.8455 11.7763 8.30723C11.7719 7.9841 11.8543 7.6646 12.0168 7.37454C12.3511 6.78507 12.8915 6.40707 13.6395 6.26093C14.4155 6.11023 15.0933 6.28587 15.6882 6.71762C16.2718 7.14268 16.4899 7.71916 16.4899 8.3687V12.8653C16.4903 13.5535 17.1661 14.0411 17.8291 13.9954C18.4227 13.9543 19.0056 13.4952 19 12.88C18.9913 11.9526 18.9926 11.0252 18.9939 10.0978C18.9948 9.47953 18.9956 8.86123 18.9936 8.24294C18.9907 7.36576 18.6925 6.56937 18.1181 5.84921C17.391 4.93795 16.4145 4.32635 15.1791 4.10398C13.4471 3.79168 11.9186 4.18126 10.6584 5.29452C10.5365 5.40201 10.4511 5.38305 10.3401 5.2882C10.3112 5.26379 10.2825 5.23917 10.2536 5.21452C10.1111 5.09262 9.96748 4.96979 9.80778 4.86664C9.04617 4.37483 8.20079 4.07201 7.24678 4.01756C6.07871 3.95046 5.01407 4.19742 4.06206 4.8006C3.4877 5.16348 3.00785 5.62915 2.65429 6.16679C2.30555 6.69022 2.06825 7.25229 2.03699 7.84949C2.0055 8.44358 2.01246 9.03906 2.01943 9.63458ZM8.29031 16.7747C8.99839 17.1421 9.7761 17.3214 10.5598 17.2979C11.5213 17.3176 12.3878 17.1248 13.1941 16.6385C13.8158 16.2639 14.3049 15.7368 14.7197 15.123C14.7574 15.068 14.7448 14.9738 14.7322 14.8799C14.7264 14.837 14.7207 14.7942 14.7197 14.7551C14.6887 14.7643 14.6544 14.77 14.6202 14.7757C14.5468 14.7879 14.4735 14.8001 14.4328 14.8462C13.8119 15.5517 13.0091 15.8711 12.1716 16.073C11.3275 16.2759 10.4698 16.3402 9.60325 16.169C8.57285 15.9651 7.57759 15.7033 6.82357 14.8213C6.78354 14.7747 6.69958 14.7726 6.61577 14.7705C6.57724 14.7695 6.53874 14.7686 6.50456 14.7633C6.50232 14.7934 6.49605 14.8265 6.48977 14.8596C6.47639 14.9302 6.46301 15.0008 6.48874 15.0429C6.94836 15.793 7.5398 16.3862 8.29031 16.7747Z" fill="white"></path></svg>
              <span className="m-l-20" > MYKET</span>
            </div>
            <div className="align-items-center button gap-10 flex bg-gogle ">
            <svg className="size-img border-icons" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="googleplay next-m2bho0"><g clip-path="url(#:R1ad9mqkl6r6:clip0_4934_17226)"><path d="M10.0058 10.3713L3.06201 18.0744C3.14173 18.3657 3.28284 18.6341 3.4747 18.8594C3.66657 19.0846 3.9042 19.2608 4.1697 19.3748C4.4352 19.4887 4.72165 19.5373 5.00748 19.5171C5.29331 19.4968 5.57107 19.4082 5.81986 19.2578L13.6329 14.5461L10.0058 10.3713Z" fill="#EA4335"></path><path d="M17.0272 9.06197L13.6485 7.01294L9.84546 10.5467L13.664 14.5352L17.0169 12.5081C17.231 12.3902 17.4211 12.2287 17.5761 12.0329C17.7311 11.837 17.848 11.6106 17.9202 11.3667C17.9923 11.1229 18.0182 10.8663 17.9964 10.6118C17.9745 10.3573 17.9054 10.1099 17.793 9.88377C17.6176 9.53392 17.3473 9.24769 17.0169 9.06197H17.0272Z" fill="#FBBC04"></path><path d="M3.06209 3.45728C3.02078 3.62171 2.9999 3.79116 3 3.96131V17.5704C2.9999 17.7405 3.02078 17.91 3.06209 18.0744L10.2439 10.5686L3.06209 3.45728Z" fill="#4285F4"></path><path d="M9.99552 10.7659L13.5864 7.013L5.78372 2.27942C5.49008 2.09762 5.15629 2.00123 4.81614 2C4.4053 1.99914 4.00546 2.14055 3.67758 2.40267C3.34969 2.66478 3.11174 3.03324 3 3.45186L9.99552 10.7659Z" fill="#34A853"></path></g><defs><clipPath id=":R1ad9mqkl6r6:clip0_4934_17226"><rect width="15" height="17.5263" fill="white" transform="translate(3 2)"></rect></clipPath></defs></svg>
              <span className="m-l-20"> GOOGLE PLAY</span>
            </div>
          </div></div>
          <div className="col-lg-4 col-md-4 sm-12">
          <div className="namad align-items-center flex">
            <img className="img-namad"  src="https://www.namava.ir/images/enamad.png"/>
            <img className="img-namad" src="https://www.p30web.org/wp-content/uploads/2016/12/enamad_icon_text_color_blue_1024.png"/>
            </div> </div>
          </div>
        </div>
      </div>
    </Style>
 )
}