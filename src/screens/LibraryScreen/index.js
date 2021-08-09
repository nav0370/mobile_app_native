import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IconButton } from "react-native-paper";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import theme from "../../theme";
import GlobalStyles from "../../utils/globalStyles";
import NavigationService from "../../utils/NavigationService";

const titles = [
  {
    name: "Titles",
    key: "0",
  },
  {
    name: "Genres",
    key: "1",
  },
  {
    name: "Collections",
    key: "2",
  },
];

const tags = [
  {
    name: "All Titles",
    key: "0",
  },
  {
    name: "Not Started",
    key: "1",
  },
  {
    name: "Started",
    key: "2",
  },
  {
    name: "Downloaded",
    key: "3",
  },
  {
    name: "Finished",
    key: "4",
  },
];

const items = [
  {
    name: "State of Wonder: A Novel",
    key: "0",
    time: "31m",
    author: "By Ann Patchett",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "The Psychopath Test",
    key: "2",
    time: "22m",
    author: "By Jon Ronson",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQExIVFRUVFhgWFxcVFxUYFhgVFxYbGBgYFhgYHiogGB0lGxUYIjEhJikrLjAuGB83ODMtNygtLisBCgoKDg0OGxAQGy0mICYtLS8wLS0tLS0tLy4tLS0tLy8tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS8tLf/AABEIARwAsQMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAABAUGBwECAwj/xABQEAACAQIDBQQFBQoMBgEFAAABAgMAEQQSIQUGMUFRBxMiYRQycYGRQlKhscEjVGJygpKT0dLwFSQlM1Njc6Kys8LhFhc0NUN08URkg6PD/8QAGwEAAQUBAQAAAAAAAAAAAAAABAACAwUGAQf/xABAEQABAgMFBAgDBAoCAwAAAAABAhEAAyEEEjFBUQUTYXEiMoGRobHR8BRSwRZC4fEGFSMzU2JyorLSgpIlNML/2gAMAwEAAhEDEQA/ALwoqqd+N9sZhcZJBEyhFCEAopPiQE6nzJpgPaXtH+kT9Gn6qgM8AtFxK2JaJiErBSxAOJzD6Re1FUQe0naP9Kv6OP8AVXM9o20f6df0cf7NLfp0iT7P2n5k95/1i+6xVBntE2l98f8A64f2a1PaBtH75P5kX7NL4gaGHfZ60fMj+7/WL+oqgDv/ALR++T+ZH+zWp372j99H4L+qufEDQ+HrC+z1o+ZP93+segaK8+HfraH30/wH6q1O+20Pvp6XxA0Ph6wvs9P+dP8Ad/rHoWivPB30x/33L+d/tWDvjj/vqX840viBpDvs9O+dPj6R6JrFedTvfj/vuX89v11qd7Md99zfpH/apfEcI6P0em/xE+MejaK84f8AFOOP/wBZP+lk/ao/4oxv35iP0sv66XxHCO/Z2Z/EHcY9HUV5xO9GN++5/wBLL+1Wp3jxf33P+mk/XS+IGkL7Or/iDuMekKK82HbuK++Zf0j1p/DeJ/p5Pz2/XS+I4Qvs6v8AiDuMel6K8zfwtP8A00vH57frr0Ju05bCYZibkwQknqTGpvT5c28WaAdobMNjSlRU7lsGh1orFFSxVxRPasP5Rk/Fj/yxUPqZ9rQ/lBvNI/8ABUN5gddKAVie2PQrBWzS/wCkeUYoqydodmKxYZ8QcU5McRfLkUAlVzBb5uul6Qbo9nj4qPvpZDEh/mwAGLedmPhX6T9fd2p2asQjallMszb9BTA48BiaV84gtFXCOybD855b+QUVX21d0sRBilwhUEyNaI8FcHgQx4eY5fAlKlqTjCs+0rNPJCFVAetKZ92cR+ipbiOzrHorOYxZQWNnQmwF9BfU0ybu7K9KxMeGL5M5IvlzWtduFxfh1prHSCU2mStKlpUCEhy1Wo+UNtFSPf3dc7NMKrJ3xlJHDu7W143aooMUfm2bpm9YfgeHxN+DXbhdobLtcmYkKSXBwLHlprljCmsVwXEEqWCaKubK3h65l9U8Le+tHxhU2K8Cy5s3h8OXnl/C6Urpdoeq0Swm8TTVjmW8/dRCqig0U2JoKKKzShRiis0UoUFYrasUoUY5j216T3Y/6LC/+vD/AJa15t6e2vSO6/8A0WF/9eH/AC1qaR1uz0jPfpD+6RzPlDrRRRRcZSKQ7XF/j/tjT9X2VCTy9o+urL392M2L2rHh1dULwqwLXt4c5tp5A1Fd7t032f3QeRX70tbJm0y5eNxzv9FV8xJdRyrG82baJYlSZRPSKQQOT+hi4d8n/k6cj+i+g2H1GmvC4p4tiLLE2V1gupte2upHna9OO9LX2XKesAP0A0gwaX2GR/8AaOfgrH7KLWekTwjKyG+HSCH/AGo8orzc7eTFenQhppHEkixsHZmBVnCnRjoRe4PlU+33/wC47L/tH+uOqp3S/wCvw3/sR/5qVau+f/c9mfjv9aUOnqEcR5iLu3y0ItiCkAfs5mHBC4m7SgEKTq17edhc/RVOQbJ9E27HGBZGfNH0yvcgD2Ekfk1O+0DaPo0eGxHzMUhNuJUxyBh7wSPfWu8+zg8+Bxqa5JkQkcDHK3hP5xA/LqaZ0jyIiosCjJTXqzErT/yA9jtOkRbtowjyyYVI8oY5tWIFvEvC5AJ5WquW3exTA6WsNWEtowpVgpLXy6uL/k1YnbXO0cmFdBmcB8o/CzIR9VQLCb34uPwLfu9F1W/hDNwFtDYljfzvyqNY6Z95CLawKmCySylsM73zq0pwwGNSKQgxezMRHcuWXxAKxZls4Vbiw0bQ38gR1rgY3sBmv63ymVvwfEPm/Np0x+1JZgO8bNYkjRRqfYPd7AByFIKivRdS5KgHX1uBJGL549r0phSNIEIGrFj+/q9K3otRSd4lSi6kAfX6xmtqUfwdMIhP3biMtlDEWUtqbKTx4Hh0NJbHofgaa4jqelhX10jJrFbCsV2OwVi9YopRyCvSO6x/iWF/9eL/ACxXm4cq9H7on+I4b+xj/wAIqaR1uz0jP/pD+5RzPlDxRRRRcZOKh7TdoSYbaUM8ds0cSkXFxxkBBHQgke+nuDerZmPiQ4tUV0IOWRWNjofCyjVTpcHjbUVG+2fTGR+cCD+/JTjH2SAqG9NIuAdYRz//ACUJ0ipQAeNSUWT4WQuesoU1FB344A6+NDHDf7f1ZUbCYWxjYZXe2hHzUB4Dz+HWu3ZtvmmQYDElQLFY2a2VgfkNyPHQ8+HS6TanZTLHFnhmErrrkyZbjnlNzc+RqB4bASySCFIyZCcuVQ2a44gjlbnfhXFKWlTnH3SCJNlsFospkyi4FSaggtiXA+ganGLf2fuvszCSnF9+DkJdVaSMovMWAGZiOWp5c6jw3o9P2thSq5Y4pCqaakHUs3S+UacqYH7PtpDX0Y6dJYj9Aam/d3CT+mxRRt3U+chSwtlYXvmBB6EWtXCpmDNWFLssshcwz94oJId+qCDkCT28xiYtPtk/6Ff7df8ABJXfsx2oMRgVjbVoGEZv81bNGfcLD8imDefdjakmHcz4uOVIwZMiggkop9WyDWxOlRXcGHFyzSQ4XEdwcuZib2YIQAOB18X108rImO0By7LLmbPMveJdKnvdJhzoDg+WUTPtRRzicEEXMfuhK6aqMpYeLTgDxpiwb+Bmkw0ZIU3dWgcgoXLXUSAWtKgFgD4V46U2b6NjIJ1jxE4mdUuD6wCvcEWZbHhzHSs4LY21ZQJUiciQl811TMHOYk5iLhr3sdDppwphU6iWPKJ5dmCbKgKWhm6xJS/SJoS1GOBDY60W4eNYFDz4ZbgOCxMFySc4Kx5vEw0FhwGnOuG0LWSQ4dMosTcwqzIysyeEHNmJZ9dTZF5ikO2odowIYsShEbNcnKpUsxubSAEXNuApfu7u5jtojO0hSO+bvJAdWBJGW1i1i787C59lcqeiHicy0pTv5i03XLkKUQxrRjjU0BIBY5R3ABbuzhI7tfUNBmWRmW4AzZcwKtaO2bxZdBTPtLZU8zKVijByqDrCrsSCwJjBGUlQdLXsuuoNTHaO5G0FUsmIikIOfKI0Q59SShK2DEnU6X5nQVD9n4bGT4pMG7FZTmNpgbDKrMcwcEkWZrXBGtJQOBBhllWCDMlLRQEmqy2Lliym458SzSHd3faSCSLB4pIxCqiJgArBSLkMMtweIB4+rfjerMXa+FDmHvYg/ApmUMdM3DnoaqbbW42Oiz4uQxShPG2UuSQvG4IXQAciNBpTXs30jG4mR8PCGkMJFswWy5RGXUsbX8XuvoNNHomrRSBZ+z7LahvZagAAXIIu3nGrEYmugAEb7/CL0oyQRhY5FEispNpMwuWVSPCc1wR1Q6Ag1Gad94MHPB3eHxEeR41OXxKxKszMOBIABY6X5mmioc4v7MAJSUpLgUBd3AwL1xFdBgKQUUVilE8A5V6P3RP8Rw39jH/hFechyr0bulb0HC2/oI/jkF/pvU0jr9npGe/SH9yjmfKHiisUUXGUimu2kfxyE/1Kf5klTzfrASTbOeGJWZyI7KLXOVlJ4+QNQTtqH8bgP9Un+Y9Wdt7ayYKAzurMqZQQmXNqQotcgcTQyQHW/vGNBPUtMmxKQHUHYam8lh2xE+yjY2Kwwn79HRWZcqueJF7sF5aFRfnbyp23OjiCYnFBVzNiJy7gXYqrkgX6W5VmPFx7WwjdxPNAMxViuUODb1XGt1IIPhIv14im/cjDGDAYuAnMYZsRHfgDljW5HlTkMkpAwgW0qVNTOmTOiu8l0sQwFMc8jnWphmwPanI+JCGBe5ZgFtmEgVmsCTmKk63tYdL86km8eAjG0MDMFAkaR1ZhoWVUuM3W3WqU2Wfu0f46/wCIVfG3xfG7PH9ZOfhCaZLUVDpajzg/aNllWackSQ3RmOz1ZJiR+VVbunsn0XbU0IFlMbsn4jEMtvZw9oNSbeTbXo2PwQJssolifp4jHlPuYDXoTTnjNm3xcGLUaqkkTfisMyn2BgR+XUiukaZERVSFqkS1BXVmIPgT40I/5DWIntjZUWK22qSjMqwK9uTFSSFbqNb252pZ2n7VxeHijbDZ1GYl3UXA0AVTobA3OvkKi3aJtWXDbUE0TZWWNbXAIII1BB5EVKt2d/sNjAIpssUjeEqxBie+llJ6/NPXnTQQSpLsSYPXJnIRJtN2+hKR0dMXo3a7HjQNDdPvvhMRs5op51E7xMrLkfWQA5eC5RchTxtrT1tLbDYXZEeIjAzjDwhb8AWVFvbna97eVRjfzs+RA+LwxCqoLSRNoAL6mM8vxT7ulOu9GuwEPSDDfQUFcdQd8WjplWRYk7lylUwOC1HYNQUDc4ZuzfenFz4zuppS6OjEhh6thmBFrW6fuKkO2E/lzBH+okHwWb9dQrsfS+Ov0hc/SB9tTzbafyxgD/VTfQj/AK6SXuV1HnElsSiXbVBAA/ZLwDfcV+USmeRC3ctYl0c2PNFKq3+YvxqttwNkHC7WxMGtkicqT8oNJGVP5pHvvUg3s2r6PtDAEmyv3sbeyQxqL+w2Pup/bZi+lDFcD3LQnzGdXU+6z/EdKkIvKpkfBorJUw2eSUnCYg94WR9PGKo7Yj/HR/Zp/rqCVNu10/x8/wBklQmhl9Yxrdnf+pL5Ris1msUyDYwK9D7im+z8Nz+5AfC4rzzXoXcH/t+G/s/9RqWT1+w+Yih/SD9wj+r6GJDRRRRkZKKe7a1/jOH847f32/XU47TI77MxPkqn4SKajvanu9icVLC0ERcKpDEECxDXHEio0+7u23VoyJCjCzK8wII9jNQ3SCldE14RppIlzZNmUZqElDkgqAPW50oImPYyR6E40zd+1xzA7uO31GlmxJ4+8x+Bd8kss0siqeLRyoAGS+hOhNqriLcLaq+rBl9ksQ+p62/4D2oWD9ycwIIbvocwI4EHPcWrgvgAXTTgfSHzbJZ5kyYs2hICq4poQzfeII11hXheznGJikUqpiEgJlDL6uYEsFJve3K3Hy1qebY2pE21MFh1a7x9+zgcFzQNYE9dL26W6iooNm7w/wBIf00f2NTRJ2dbSds7ICxJLEyoSSeJJvrekEqTRKVZYjSOrCZ6gq0T5VEqAunNQYkue2jA8IdO2iYGbD2IORSdDwJb6OFT7c7bYxWDimZhmsEe5H84nE+/RvyhVWDsyx/zE/SLW/8Aywx3RP0grqd6FFQSa8/SGzZFiXZUSDPSCh2VTN3pe5Z5Q/bfXCy7ZC4nKYjEq+Jiq5spK+IEW10486T9oG4uXupMDh2I1Vwhdje4s1iSbakG3CwprHZdjusf6SnKHcna6qFXFZVAsFGIkAAHIACwFcuKU4KTX3pDkzJUlUtUq0p6IYgvdONWBoa8agEGJQEMOxWTEEhhh3U94dczBgq689QAPZSXcvauGx+CGAf1hGI2RrAsoGjp1toeoI9l49jdydrToscs4dQSwDSu1m4XOYXJtw42ueF6T4fsuxykMskSEcCJHBHsKppTmmP1Dg2BgfdWRUtQXPSFFRUCl2B88O6nbNt0tyI9nO83fF2ZSLkBFVSbtzPGw15Wpvk25Ditr4ZYWziJJgzD1CSjeqflWtx4dL1HH7MdoSavPF+VJIf9Bpy3X7P8Zg8QuJz4dygIyl5APEpXiI/Oky6AIIHIxxSbOSudMtAWspUBkKpI+vDtjh22H7phbcQrn+8v6qsbd3aHpOGin5ugJ/G4MPcwIqIb5bn4zaDRszYePu7gANIb3IOpKacKZYey/GqMoxaKOivKB14BetdaYFkhJr+EMKbLNscqUuaEqTe1OJOnZDR2tH+UG/ET/DUMqyn7J8Qxu2JjJ6nOT8SK5jsjn++Ivg/6qiVLmEvdMW9n2hY5UpMvegsAMD6RXVFWQOyKb75j/Net/wDlFJzxSfmH9dc3Mz5TEv63sX8QdyvSKzr0F2cH+TcL+If8bVCh2Qv99r+jP7VWNu7ssYXDR4fNm7tbFurcWIHIXJ0qSVKWld4hqH6ekVG2LfZ7RISiUpzefAjI6gaw6UUUUTGchr2txX30jy0u2rxX3/VSOvO9sgG3zXGY/wAUxYST0BGuWjLWa2RCdAL1XJlhSgkBycmc9gESPGlFKxg7auwWjvkX1Fuepo/9WFFbQUy+Bqr/AKB1d7Qzev1a+XfHKLDM3AadTXXukX1muei1xlxDNxPuFc1W+gFOEyySi0qXfOq8OxCacnKjwjjLOJbl6wpbGEaIAo+NJMRiLDMzcwLnqxCj6SKbtmbdgmmlwwkyyRuyWb5eVspKfO1B046dNaY+0jbccUS4dJM0zMjWAsFVTmUnzLBbD2+8k2a2WlaUTSwyBKU04IDYcE8DE8mzKVOEoBiWyOBzJ0av4xML1gvw14mwvzPQUxx75Yc4qLDqi2kjVs1wbM9mRfhf3lfOoTPvzIYIEuc8OJMntRNUBP5Ti3RVpSdlX2dT4HopOBdi67lCxqxGETyLFPmnqthjob1e9PiIthcM55Ee02+utzCF4yW9xNJI5xIocHMGAYG41BFwdPKtMRiUjGZ2CgkKL82Y2AHUk8qFEyQktLllR/mUf8UBPdePbAQSs/gPzha0LWuDmHXT6udcM56n4ispIVNwbV3MiP6wyn51OCZM4dBVxWij0TyV93kv/tHKpxqPeXp3QnznqfjXbD4kjQ6qeP8AtWJcKw14jrXGmPaLHNF50q0OBHkoHtByOnWSsQoxCFdQbqf31rjnPWuuHny+E6qeIrGJgy6jVTwNTT07xG/kEt95Ll0E6aoJwP3XYw0UN1X5/jGneN1pfs5iQbm/uptpx2bwNE7CWpVsAJOCs+ENngBELaKzRW3gKG3avFff9VJoYixsP/ilmPjLMoHn9lcZpQoyJ72rFW+zINsmzp1EAjDFRup6Kf8A6P3RxMGS1G4AMYzljXicxrV8Y3BbKKS3rpFAzagadToPhQSLbaJh3VlRcfKWKkcVVVzLgaw8oSKqL8/bRqTfU1tHGW4C9dTkX8M+Wg/3rSTEMdOA6VFuJUo/tluflSyj2q6oOrXzqIdeJwHf6Q0724oYbCTSFvGVsgGhDv4QQfIG/uqAwdpuJSARhEMg0MjAkkciVuLt5391Lu1bH+CHDA+sTKw+KL9b/Cq5rRbNly1SL6UXXfAqduKnBqXdmBBFIvtn2CUuQDOSFEl69w+sdBM2bPmIa+bMCQc173uOd6MROzsXdizMblibknqa50VZtF1GyuQQQbEG4I4gjmK1orNKFEr2Hv3Nh4hCY0kCgBc4N1A+TcHUdKSYreqSbFR4iXRI5FdY00ACuGst+JNtSf8Aao/WKG+DkBSlBIcuCeePInUQOLLJCioJDl688YsLYu+TTYlpJ5FhhjRmCgmzNoBp60jWY/DgKmeydp+kKZBGVi+S0mjPbiwXknmePQWqjYXAYEgEA3Km4B8jbW3sI9op1x28U85CySssIsO7jAVAOioLKbDhVfadkpWRu2GXAAaAYk1qT3kuArRs1KyLlKd3IZmuZHfUXZgNoq1zFIGCnK2U5lzcxcaX624U4sgkUsosw4iqy3X3kzMsMSLHHcRRRDViDq80jfKyoCdLXLe8WJh5sjX5c6AlTPh1fDWp90cjW6/3knAEHFqYipEUNqsqpSuOXHnl+LjKOVK8KMyGPpw/f9+Na46KxzDg1cYZMrBulQS3sNrMudhVKuKFDEcGZQ4hohP7RDp9mNKctm8D+/WkuOjs1xwbh9v7+dKdm8DR2yZCpG0t0rEBQ50oe0MeRiOaq9LflC2is0Vs4DhDtCYiwHPifKkMMRbyA4nkKW46Esyj23PSkk0o9VfVHwJ86xu1UvalzJ56CWCUu17ogkDQAl1KxwAqQxkrqsnHP35RsJUX1RmPU8PhXKWVm4m/1VpSrCwC2d/VH01WS12i2K3CGSnEgdFAAxUrVtVFRyesSG6jpH1McocOzcBp1NdzAieu1zXOfFsx0IA6U2bYxogglmPyIyy+bW8I95sPfUu8skk3ZCN4rAKX1ScKIGWl4vhSEEzFlnbgPWKl3+2iJ8dKV9RD3YHQJcH4m5/KqP0OxJJOpOp9tYrWpDBvo3gKDVo20uWJaAgYAAd3rnGaKxWa7D4KKKKUKCiiilCgrFZrFKFEn3DxCRStMwzuE7uGNeLSyHKoUchYG55Xq3IQ2UZiC1tbcL87eVURsnaDYeZJ0sSpuAwuDcWI+BOvGrPwO/mHlyqIp2cjVURGseYBz61ndsWWYpYmpBIapGTeQzfidBFJtKzTFrC0hx5N5DN83Ogib4VwwMbc+HnSV1IJB5Ukw2OL2IgnXzYQr9HeX+inWbxr3g4jQ0EHtVnunryxT+aXmOaMR/K7AtFEpJlq58XY9msEfjjK814fv+/Ku2zOBpHhZcrA8uBpygjylhyOvxq42Sd9MlTvvIBQrkxKD3Onsgeb0QU619YUUUUVqWgaG/abHReR40hpXtTivv8AsrjBAD4m0UfTWE2pKmT9orlpqaM5oBdBNcgHJPqanSiEywY2w0APjbRR9NJdp7TRdXcIvK519w4k+yu2InzeSjgKr7f3eCSMdyjCItxCm82U83I0iU8gCWPlUYImkWOzdU9ZVQVtnmQkfdT2mrsRZrOqdMA9jwNeyG3b++8yylcNMCvVolFj014+8D2VH9pbz4vEIYpZcym11yooNjceqo5gUz13wOEeaRYkUlmIVVHMn6h58q0cqxSJTXUBxndS/eAI1aLNJlgMBTMgPzdodd0N3nx2IES3CDxSP81f1ngB9gNWOeyfC8ppf7n7NSTdPd9MDAIV1Y6u3zn/AGRwA+0mn6rVEgN0hWMvbdrzVzTuVEJFBx49uXDjFbnskg5YmT3qprQ9kUfLFP8AmD9qrLop25RpA42tbB9/wHpFWv2PjljD74R+3XM9kB+/R+iP7dWtRS3CNPOHfri2/P8A2p9IqVuyKTli196MPtrT/lHNyxMf5r1btFc3CPZjo2zbPmH/AFT6RTrdkmJ5Twn25x9S1B9qbOkw8rQSrZ1NiOR6EHmDxBr01UX333TTHRHQCZAe7c8+eRvwT9B16gsXIDdGDLHtyZvGtDXTm2HGmI1x4caCrrhZgrqxVWCkEhr5WtyNqzi8I8TtFIpVlOVlPEEfvxrjQ2MaihHvzH0i8N18fh5oQ0CqqjRkUAZG53A+vnT5hpspvyPGqF2DtqTCSiRDpwYG+Vl6EfUeVXDsrb8E8SyCRVB4q7KGVuakGspa7LNsU4TpRLO4OLHQ6/VNKlxGZt9hMouKpPb3+ufN4ecTFlOnA6inDAy5l8x+4puwmJSVTGroxHq5WB9t7Us2Zwb21Y7LG7tqVSqImJVTQgOU69Esx+RQ1iomg3GViIX0ViitZAkIsbHcgk2UXuaRzzZtBoo4D9+dKNqnVPf9lNeLlKqSFZjwCpYsT7W8I9p0rDbankWmZKQGe7eOauiCBwSNMz0i9Ak6Sl0gwwb370LhFyJZp2Gg5Lf5TefQc/ZVR4nENIxd2LMTck6kk04byTZp30F76lXMl255pD6x5aeHTSmqrjZ1kRIlAjFQcnyHADQd5jX2KzJkyw2JxP05R0jq5OzTdT0dPS5VtLIPCpGsaH6mbiegsOtRbsx3T9If0uZfuUbeEHg7j6wOfU2HI1c1W0iX989nr6RTbat+Nnln+r/X17tYKKKKKjNwUUUV2FBRRRShQUUUUoUFFFFKFEN393PTGJ3sYAnQaHhnA+Q3n0PL2VSMsZVirAqykggixBHEEda9Pnyqoe1LAHMMQ+GyPcKZo2DRuvAZxlDK40FyNeFzYWFnyx1hGh2LblA7heGVQ44Yhxyw5YV9Up3AeI4gQyQK5e5UuL2IUtbKdCLKdbXv9EWFOW720/RcQk+W+W4I6q11NvOxqutMtUySpKcSCzFq5VcZ+kaGegrlKSMSKVauVefpF44eyEWAAHICwt7KdMMti4+Hv1piwONSaNZY2zIwuD9YPQg6EU+4JrqDzPH7KqdgqecZasQSrwKFDvKT/wAYxNoBGPLx/OFNFZorYwHCHaieEN0+2ortuGecejwnulb+cmN7hT/44QNSx5toADoSeEvxAvdOoP0UxYqVURnZsqqpJb5oA1PurFbdRu7WJqQHIbXpJbLOhSw8IPsiymoGGtcYo/b0Ucc8kUVyqEqGY3LlTZm97X4crUgTiL8L0v2tiFklZkTInBRzAHq5jzJ4k9Sa5YKTJIr3sVIYHKCQRqCFbQm/XSr+VeuJvO7B3qXbPjrxzjboJCQ+IHvtJ59rRf8AuuGXDxJIkcTZbrElxkTobm7NzJ6n3l7qM7iyLJhVnCsGkLFmdi8jZXKAux4nwnQWAvoKk1WcvqiPP7Qm7NUDiCX5vXM+ZgorNFPiGMVG969749n5TLh8TIrKzF4Ig6IFtfvGLDJx59DUlqLdp0mXZWNP9Sw/Osv20oUabI39w05hVkxEDYhykCzwsvfWVWLIVzLls6+IkA8r1nau/uDw64h3MhGFlSGXKmodwSALkXGnGoDtrvGh3bMLKkuRERmXMqsYYRdluLjQ6VEt7Vlhh2nDM6yStj8N3jIMqszQYiXwryHhAtShRfewN4kxZcLBiYsgBPpEDxA3v6ub1uHKnqoxubtDvRIp2lBjmBU3hWNDGpBsHEbNckg6m3A1J6UKCiiilCgqne2bDZcVFJyeLL+Upa/0FfhVxVXXbRhL4eGa3qSFSfJkJ+tBUM4OgxZ7HmXLYji47wW8Wio6zWKLUDG0i1uzeeE4bu0J7wMWlB466BgPmWAHuNT3ZnBvbVP9nsUDyDxyRTgllKMuSRPlIVIJ9o5jXlVwbM4N7RVPZJYTtej1vGv9Jw1GndlGT2ugJmKYmrGvuo0MLqKzRWreKSEGOkyujdL/AAqL74YIyho3fu8OimSZh67qniyL0GlyfJbX1tJdrcU9/wBlRnf+SQ4QLEpLzHJYclGrkngBZQCTp4qyVuKplqmywWKVS1A6ApShR7HQp8meLKxA7yWxZ6PpV3roH5YxS7a62tfl08qwKzl/cfZWQtXRMbbOL57O4suzsMv4LH4yMftrff7bb4LZ8+Liy54wmXMCy3eRU1AIv63WlG5iWwOGH9Sh+Iv9tMXbGrNsqVFVmLPCLKCTpMrcBr8mrJHVHKPPrUq9PWdVHzhI28uOwgwk+MfDSw4kHMsMUkcsdoTNmF3YOAEIIsOIrph9+8RIIiuznHpUUkuGYyq6uUTOqy5B9yLLoNSQdLcaN092sNBgosecNJNiPQwxV2kdyXhBkjjjkYqhYjLYAcbcKim4e1jHjoMNs6Rmwk4klnwkoLNgspIYZvk3a1h56gkg06IIkv8AzJzwYaeOEN3mHnxOIXMbxRYYWkC8LsXBUE2rXYm38biu7TG4KB8LjMO00ZRZHRAFzrHiQ4K3Itbhe2nQM+w915XO3kSBkeYyw4cyBkQo7SsRGWFspYg6acOFOu4+1ca8eHwPojxxYbDNFiZJkZT30a5EjhN7NwBJAItShRFdob2sNi4LaBgwvfpiSkChGCQqiyWKIHuP5kDUka8Ked45ZHxWM9G2Tg8RHh2jfFviMpeaRYs/3MHRSqOwuQePuqI4Xs3dtlCU4OZccMQqEEPmMBIuTHwsAeNuVTXHzz4SfakDYWeT04Z8NJCjPGzNF3QjkYD7mQbanTjytdQowmJT0vCR4GSPZsOLwXpT91h8IGcggorlkI0V359etGN39xeHwWVAmLxXpkuFidULCeOIZzMI4rXIBCkLpmBoXcaVsZsxcRho58Ph8CIJiSjRiVUa3hY5mF8tjbnW+3t2sXiNqxJhD6FBgsOe5mECNGJJT90WJDZblWAvyymlCjviN6cfJslNqwywRmOKQzxvEzZpY3KEJ4hkF1PG/EVpJvXtDDxbPlmkw0ox2Iw6eGJ07uKUAtrn1bxCx4acDSHA7s4+PZO0tmtG0khnYwN4FEySMl2W7WW5V2IJ0zUt3m3bnmwuxoGw5cQzYYYlLBgsYRVlz2Nitrg8RShQ/wCyd55JdrYvZzd33UUMcsTKDnOYJnzHMQbF+QFKO0XB97s+dRxUBx+SwJ/u5qh+7+7MuD3hkkhwjR4N4iiuigRC8Ubnnp90jI9pqzdo4USxSRf0kbIfYykfbTVB0kRLJmbualehB7jHmrLW2WtspBIOhvY+0caU4RDr7KqVKYPHoSqQ47nYOOScIZHik9aGRLaSAggEHjcezh51d2xg2SzkFtLlQQCeoB4X6a286pXd+ZFxMfeDQsBnGhR7+F1I+a1vK16u/ZvBvaKClE/rOW+BSr/FQofMdoxjN7cej4N9fbjtFDC+iiitI0ZyG3avFPf9lMO8Yz4WUNKYowLyMPXMR4onIFrga36W10ftrcU9/wBlV3vtLJOrohywwgtLIeDSLcCNT8oi4HQE68NcZaj/AOWmDIgA8jLSNDVyGGrRbWGXfKKsxd+3TMuwHEiK3ci5sLC+gJuQOQJ50Dl7aULCRYlSLi4upAI6gnjrW+Xn0Iq7UsNGxBqBHoHd6PLhMOvSGMf3BTlSXZ65Yo16Io+Cimrbe0WGZI3SMKLyTSerGOig6M+vDgOfIG2e6mPPQkzVlvdffE4AE0h+vyrmcq3NgOpA+u1VRjd6nkJwmzlkJY+KY3M0jfKYHiB5m1hwygVzh2DtfDj7lnHOwlUrc/OGbU+0GoDaPlSTq1Ysxsm6HnTEoJwCiASNTWnKp1ANIt1WB1GtVbvM+1INo4bCptQrHjpZu7Aw0B7hE8QXxAmTRgt7jhenbdnb2NWQQY6EoG8EcpTLeW1wjG+U5gGt5jzrO1Nmy4zaOCxC5F9AklEyMWDESKMkkYtYqQL6kW1GtTImpVAM+yTJJILEBi4LhiWfk9OBYHEPF5dv4sY3FYWbbqYRcOYUUyYfDt3zGEd4wDWyeIXI1Hj5WpXgt7MZNjJ4Bjo4Z48UY0weIiWON8Or6FZSpZpGTW2nG4FqXwYDHYXGY+dNlJihiZg6OcRBGciLlUWcEjUk8uNN2926G0Me/czYaFmGIBjx6SRo8eEJ/m3jADOy6npfh1MkCxnfPZDDa2Cw4xmNCY1p2kUYmRQuUZlWIDRFBNrWOlWTF3eEw6q8pyRIF7yVrsQotdmPrMfpqP7y7utJtDCbRaVEhwaOWBBLsSDe1tALW1+ikeNwwlJx20CUhU3iw549VzoOLEfJ+Ol6imTLop+A4k+3gmzSBNPSLDCgdROQSMyc8gKk4Auh3teX/pcFNMo/8jZYoz5qzcR8KziN53hGaaOEfOWPFRtIPLK6rmPsNRLanpm0bEKMPhB6pclEA4KSflG3QWHDzpGmz9mqPR/SXeZtBKoywxt8nNrqpNgTrx5UKZyzh3lg/IEE95i6TYLOGCk1GITeWR/UoKABGYCX0eLL2Vt6HEABSVYqGySDK+U8CAdGHmpI86d6p3Y+JaNm2ZiSY2Vz3Et/FDNfwkNxEbG3D534VxP909stMHw84y4iA5ZByPRx5H9+NTSZ95grH66e8YAt2zty6pfVoew4KBzBNDocyCDFR707NZMXiE0sJWI/FJuPoIpHh4bXJI16VMe0rChMZn/pURj7RdP9Apq2HsGTE5ijIqrYEtfidbAAa1T2qaJV68WAMaSTaE/DpmKLdEd/5x23ShfvCyhJV4SxMVzNHpdlVvCSCbcfLnVt7K9U+6ofutsFY41MkQ78O9j8oa2ABHKw9ljU1wgAGW9yOPvoXZ/7W3maMEuHpUtgCMaOdQBWjRQbVnJWsge2PiNDjqS0KaKKzWqimhu2qminkL399v1U2GJbZcosOVhanjGSgFQfVa4P0U2yxlSVPL971htvSR8Sqakv1QoaG4COxScOIX2nSD0WPv8AKIt2iwd5AkpF2Rit+eRwTc+xlHxqvFjBIFhqQPjVvbXw3eQSIOLRm34w1X6QKqjZ8eaaNSPWdR8XA+2idm2pdolkLLkU7DhzLvXE5kmsaLZkwCSU/KfOvm8XzjJu6iZ/mIT8B/tVOmVtpYpozIRhYgzuwsto0Fy55F2463tm8jVq70xM2EnVeJja3u1+qqwmgGC2cqWtPjGDG/EQDUL77jT8IjlWmtJrXAB/fOK3YyUhClJ65ISng4cq5gAnwzh0wpKRfccmz8Mf/NIb4mZTrmXL4jfQ2FvI0z4pEKO+z58RmhXPKCxDupOsyBCNATqNLAg0q2ngTiZMFGDfLgomIDeJsgdmRerGwA9vlSTZU7CaFVssqOTIWjCCOFQe8VwLFly3vmudOIvQxNWP49mn1DuXi1QLoK0mtSRk1arJBKnCTUnoki6mojnsja2IxWFxUckzO0KpPESSxUxOuZgTrez8b1L8JthWii2texj+44oKOKsQM1hqbPlYDo5qHbr4pH2iyRJkhxAliC9FcEgfSPZTluJgWvjMKRceDMp1GZJQDcH2GnpUfeoqPfGG2yRLF4kXWulsOitkLFKZPTBQpWsSqHfppQThsDiJgOeij4jMK6De+ZRml2biEHUXb/SLVLUjCiwAAHADQCt6LKF/N4CM38RZ8NyG/qU/mB/bEZwO8EGNdI4ibhs7o6kMAguL8vWK8CeFRjY20zizjcTLld4Yy0GZcyRgBz4UOl9FuTrpU42jEBIJbaiOQXA14A+35NVl2esC+Jw9xeXDyIgOl2I0HtsT8DQ8wqC0hVXftoGpXOLGyIlKkzZiAQwTiXIF43qgJoQljwxcQgiknx8p76Zu7TxSSMfDGg4sANAeIAA1NDbJwczZYMU0etguKUpfX+ljuBfoQDTliMOHwASEFTBITi4zo7NwEhPNNCLcr+Vc8NtSN5RPNLojtKI2DhmdczKikXUjOQNbG1hwAsGAAz55/i+WfHIBout4vpbsMEkgJAFGqHASR0qNUABmU7iOGOhd8PMuI0mwJRFkU3upbKIyedjmKnlqD5yaXEd3tTCYlT4cXAgfzLLYf/zqN7TLJs5S2smLmkmJPEqgyi/tZi3vqT7Iw3f4bZco9aKYJ+SgbN/lA0Qippj0T407WIEC2gXUurqvMSWwDoqRw3iCWwGUY7V8PYQzdCyH3jMPqauPZ8t4ZD1lt/cH66fO0zDZ8C7fMdH+JyH/AB/RTf2exmLCZrG8jsy3+blUZveQbVX7ZkJUCVqZNCTjTgM1EhgM+QJAEqa+zW0U3i/1iTMe7Fh654n5v+9KNmcG93203mnDZfyvd9tVmyZ5m26WAGSAoBOnRPeTiVZ8AABWzUsgwuorNFbR4Cht2v8AI9/2Vx/nE/CT6R/tXba/yPfSOGQqQw/cVidozko2lNTM6igkK5XUsRxSWUNWu/eMHSw8sNjGlVxJg+72okVtGxMZGnyXkDae4291WZiogDceq2o/VUb2ngr4/CS24uqH2pd1+tvhQ+zkrs9s3K8TSmGoI1BFRwLxY2KcElWhSrwBPqInksYYFSLgggjyPGoTvjsFp8NoCZcOTlPN4gLj2nLb8pT1qc0WreLlhYIMU9ntC5CwtGIL+o5EODFMYXaWElRIsTG8UkShUnjNz4fVzqeNuouelqdcXhcXLGUR8POjgK2MDBXEYOYpMxOYDQHW50Iub1J8fubgvE/o7sWJJEbHnqbKWAHsFNDbs4TVVwmOF+gUDj+EbUBuZiaFuyj+DfXjGhTbLPMZUu8GLsoJUAcadMEcgbp+WIvhcRhsEwaIek4hTo5uIUPC6j1pD5mw6VK+z/ZuI76fFTxlBNZrsApZs+e+XiBc316edOexN2Y4iGSHu+eeUrJPz0ULdI/aCb9KlYFqlkyC4Uo4ZD8a+AgO37RQtJRLqTiolyzgsAOiBwHaHxzRRRRkUccp1JHhtmGovwv5+VVxt7YInLT4UGPERNeWAaNmBuWS3EniCND5HQ2ZTVtPY6yssis0cqerInrexhwdfwTUM+VfS2PvI5HwyMG2G07iZeBY64jkoZpObVGIqGMG2ZiziSs6GNMWn3OaNyqx4mMixuDxbSxHs6CtNpxzxXCbJiQfOMYnPtz6j4innbm5pxJ7w5YpvlMgJik6MV9ZH68R5mmiDYW1sOwSGRivUSAxj8mTh+bQSkTBiDzAB8CHB1qHxi7lzrOqqFpDfdUSABoFAgEB+iCkkClMAk2RsibHHvcU5SCEEXIRAAOKoLAKBzNrD6p3sKONwjxR5IIlKQi1r3tmkt00sCdTdjzFcYNizyhPTZFYLr3UQIjZgbgyH5dvm2A9tSNFAFhoBwomRJu18TifNgNIq7da950QRTAJ6qeVBeUcywAFA7ulPtDCrNG8TC6spB9lNEUYAAAsAAABwAAsAKfZvVNMlZz9Jj05Q4K+kD2Ym6R794Rml+y/le6kcMRY2H/xTjhcouq8udD7Cs6viEzjQdID+Y3S4HIYnAUGJjs9XRaFdFFFbSAobdrfI99IKep1W2ZwLKCbnkOf1U3bMx0U0InVLaG6llJVh8klSRfh8azVv2HNtVpVNSsB2oXySB9ILlzbqMCwz5vBh/EDGfyf386TxwhnjvxR8w9tiv8AqNc/4aQRDECAmLwjOCtwxIX1eJAc5SeoJtbWt59toJcndEnMgLDq4QrbS1/ug4kcDa/CkjY0wGUsrTeQRWtUguAeIqAflpkIkaYCQE65ihwPbXDGJBRUa/4rjPdWAHeJn+6SLGFPAoS3ygbi3kadMNjWkzgIQ0ehBNhn45QeYy5Wv0ceYGlvg4QKqTMR1g35t5w40UxLt+xHex92paVA2bN4oiQ1wBwJXSuGC3pEmUCJw0gvGNPEbA6k2HAk3BOiNzsCrwjvw8xnby4+hiSUUyDboBkV42RogC4uCLErYqR6ws9+R0ItWP4cyiNpImjWVgFYshsDG8gzBSSDaO1tR4hqdaV4Rzcr08tHprStMofKKaP4WJhinSLMJAhsWAI7wqF5a6sKRYzelIlJZPGJGjZcwsMsZctmItl0t764VCOps8xRYD37aJJWaZl20mSOQ5SJJREGjdZFBINiWHK4t5XrRN4Y2kjiAP3QyKCSo1jYqNCbkPlYgjp5ileGsc3Ez5dfB38jD5RUYXelAoLRurNEZQLgjL3YkTXlm1XX5SkcwT1j3jDZskYbK5QhJFdks5XNIigsi+HjY8RyuRwKSc4cbNNGKfKJFRUfj3gBK/ciFYquYsmUkuU8DXyNYjhmDajw30raXeFFleIo10IF9LNqgNj1tJe3MK3Su3hDdxMdm8R68oeMT6ppohjLGwrXC7fVwQY2VhGJSt1N1YIVsed89uWqnyNaLtxrORAQUjMjKzBXVRfRlIvm0PC69Gqp2hs1NtmoWpTJAYgAuavjl3HviaWiYgEXfEcoWzyhB3a+89K67K+V7vtpufbhVyjwkEcSpLAAJ3jG+UA2UcAb3tpzp5wz5lDZcubWx425X6G3LlSk7OWm1pnlYZIICQlgkEEMKnVyWqfBsx0oYjGrvjCiiiireBo4YiBZEaNhdXUqw6qwsR8DXDEbPjkDhkuJMpbUi5W2Vrg6EWGo10HQUsFbUocFEYH37AhuGyYc2YJbUNlBbJmW1m7u+TMLDW19B0rKbKhAyhNCAOLcAQw1vfQgW6AAcBThRSaO31HEmGgbAw4OYKytYDMjyI1gAtrowPBR8KcIIFS+UcSCbkkkhQtyT5KPhXeik0cUtagyiT2wjGBjBBC6guw1PGQ3c8eZNJzsWDIsfd+FfVsWuuqm6te4N0U3BvpTpWKTCFfVi59v6nvhvGyotDluQc1yWJJ09ck3f1F9a/qL0FuUGxIEZXWOzL6pLOcoylQq5iQqgMQFGgvoKdqxXWGMLeLZnPfCVcHGI1iA8C5coudMhBXXjoQK4YrZEMqlHS4ZzIRcjxspQm4OnhJHvpxopMIQWsFwTDe2yoyndsGZbk+N5HN2QofE7E+qxFr86yuy4gCAgF8l+P8A4zdLa6ZTqLc6cKKTCO7xWp74Z03fwwXu+7GUrl1LklfDYXJvp3aW10yi1q2TYcI0CuBcsB3k1lYksWQZ7I1ydVsdT1NO1Ypt0aR3fTfmPeYaxsSAEHJzDes9mYPnBkF7SHOc12ub1tNseFizMgJZlcm59dPVPHT3edOVZrrDSOb1fzHv96CGrD7FgjAVY7WIYXZybgADMxJLAZV0Nx4V6Ct4tkxKGATRkMdszkCM8UQE2RfJbDQdKcqKTDSFvV/Me+EUmz42vdb3NzqeOQx9fmEj30sArNFKGkkwUUUUo5H/2Q==",
  },
];

const LibraryScreen = () => {
  const { locale } = useSelector((state) => ({ locale: state.menu.locale }));
  const [selectedTitle, setSelectedTitle] = useState("0");
  const [selectedFilter, setSelectedFilter] = useState("0");
  return (
    <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />

      <Header
        title={locale?.library?.heading}
        icon={
          <IconButton
            icon="ios-search-outline"
            size={22}
            style={{ margin: 0 }}
            onPress={() => console.log("Pressed")}
          />
        }
      />
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginHorizontal: 16,
            alignItems: "baseline",
            marginVertical: 15,
          }}
        >
          {titles?.map((title) => (
            <TouchableOpacity
              activeOpacity={1}
              key={title.key}
              onPress={() => setSelectedTitle(title.key)}
            >
              <Text
                style={[
                  styles.title,
                  selectedTitle === title.key
                    ? { fontSize: 22, fontFamily: theme.font.fontBold }
                    : {},
                ]}
              >
                {title.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 14,
          }}
        >
          {tags.map((tag) => (
            <TouchableOpacity
              activeOpacity={1}
              key={tag.key}
              onPress={() => setSelectedFilter(tag.key)}
            >
              <Text
                style={[
                  styles.filter,
                  selectedFilter === tag.key
                    ? {
                        fontFamily: theme.font.fontSemiBold,
                        borderWidth: 1.5,
                      }
                    : {},
                ]}
              >
                {tag.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{ paddingHorizontal: 16 }}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <Text style={{ fontFamily: theme.font.fontBold }}>
              {items?.length} Titles
            </Text>
            <TouchableOpacity>
              <Text style={{ fontFamily: theme.font.fontSemiBold }}>
                Recent
                <IonIcons style={{ marginLeft: 5 }} name="caret-down" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 14, marginTop: 10 }}
        >
          {items.map((item) => (
            <View
              key={item.key}
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
              }}
            >
              <Image
                resizeMode="cover"
                source={{ uri: item?.image }}
                style={{ height: 60, width: 60 }}
              />

              <View
                style={{
                  marginLeft: 10,
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontFamily: theme.font.fontSemiBold,
                      paddingBottom: 2,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontRegular,
                      paddingBottom: 2,
                      fontSize: 12,
                    }}
                  >
                    {item.author}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontRegular,
                      paddingBottom: 2,
                      fontSize: 12,
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
                <View>
                  <MaterialIcons size={25} name="more-vert" />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  title: {
    marginRight: 15,
    fontSize: 15,
    fontFamily: theme.font.fontSemiBold,
  },
  filter: {
    borderWidth: 0.7,
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 12,
    borderRadius: 5,
    marginRight: 12,
  },
});
