import { fireEvent, render, screen } from "@testing-library/react";
import { TwitterFollowCard } from "../components/TwitterFollowCard/TwitterFollowCard";


describe("testeando el componente TwitterFollowCard", () => {
    const userProps = {
      userName: "PepitoGonzalez",
      name:"pepito",
      initialIsFollowing: false
    }

    it("simple test", () => {
      expect(1).toEqual(1);
    });

    it("renders user info", () =>{
      render(<TwitterFollowCard {...userProps}/>)

      // comprobar renderizado del nombre
      expect(screen.getByText(userProps.name)).toBeInTheDocument();
      
      // comprobar renderizado del usuario
      expect(screen.getByText(`@${userProps.userName}`)).toBeInTheDocument()
      
      // comprobar renderizado de img y src
      expect(screen.getByAltText(`El avatar de ${userProps.userName}`)).toHaveAttribute(
        'src',
      `https://unavatar.io/${userProps.userName}`
      )
    });

    it("button 'Seguir' changes to 'Siguiendo'", () =>{
      render(<TwitterFollowCard {...userProps}/>);

      const followBtn = screen.getByTestId("tw-followBtn");
      expect(followBtn).toHaveTextContent("Seguir");

      fireEvent.click(followBtn);
      expect(followBtn).toHaveTextContent("Siguiendo");
    })

    it("button 'Siguiendo' changes to 'Seguir'", () =>{
      render(<TwitterFollowCard {...userProps} initialIsFollowing={true} />);

      const followBtn = screen.getByTestId("tw-followBtn");
      expect(followBtn).toHaveTextContent("Siguiendo");

      fireEvent.click(followBtn);
      expect(followBtn).toHaveTextContent("Seguir");
    });

    it("change to 'Dejar de seguir' when hovering", () => {
      render(<TwitterFollowCard {...userProps} initialIsFollowing={true} />)
      const button = screen.getByRole("button");

      //comprobar estado inicial
      expect(screen.getByTestId("tw-followBtn")).toHaveTextContent("Siguiendo");

      //cuando se hace hover
      fireEvent.mouseEnter(button)
      expect(screen.getByTestId("tw-followBtn")).toHaveTextContent("Dejar de seguir");

      //cuando se quita el hover
      fireEvent.mouseLeave(button)
      expect(screen.getByTestId("tw-followBtn")).toHaveTextContent("Siguiendo");
    });
  })