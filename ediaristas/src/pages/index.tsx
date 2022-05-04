import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import UserInformation from 'ui/components/data-display/UserInfomartion/UserInformation'

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais perto de você"
        }
      />
      <UserInformation
        name={"Trintim"}
        picture={"https://github.com/Trintim.png"}
        rating={3}
        description={"São Mateus"}
      />
      <UserInformation
        name={"Gilson"}
        picture={"https://github.com/Gilsonserious.png"}
        rating={3}
        description={"São Mateus"}
      />
    </div>
  );
}
