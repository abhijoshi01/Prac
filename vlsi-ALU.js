code-----


LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
ENTITY us_testbench IS
END us_testbench;
ARCHITECTURE behavior OF us_testbench IS 
    COMPONENT USR_3039
    PORT(
         Si : IN  std_logic;
         Pi : IN  std_logic_vector(7 downto 0);
         Mode : IN  std_logic_vector(1 downto 0);
         Rst : IN  std_logic;
         Clk : IN  std_logic;
         So : OUT  std_logic;
         Po : OUT  std_logic_vector(7 downto 0)
        );
    END COMPONENT;
   --Inputs
   signal Si : std_logic := '0';
   signal Pi : std_logic_vector(7 downto 0) := (others => '0');
   signal Mode : std_logic_vector(1 downto 0) := (others => '0');
   signal Rst : std_logic := '0';
   signal Clk : std_logic := '0';
--Outputs
   signal So : std_logic;
   signal Po : std_logic_vector(7 downto 0);
   -- Clock period definitions
   constant Clk_period : time := 10 ns;
BEGIN
	-- Instantiate the Unit Under Test (UUT)
   uut: USR_3039 PORT MAP (
          Si => Si,
          Pi => Pi,
          Mode => Mode,
          Rst => Rst,
    Clk => Clk,
          So => So,
          Po => Po);
  -- Clock process definitions
   Clk_process :process
   begin
		Clk <= '0';
		wait for Clk_period/2;
		Clk <= '1';
		wait for Clk_period/2;
   end process;
  -- Stimulus process
   stim_proc: process
   begin		
      -- hold reset state for 100 ns.
      wait for 100 ns;	
		Rst<='1';
		wait for 10 ns;
      Rst<='0';
		Mode<="00";
		Si<='1';
		wait for 10 ns;
		Rst<='0';
		Mode<="00";
		Si<='0';
		wait for 80 ns;
		Rst<='0';
		Mode<="10";
		Pi<="10101010";
		wait for 100 ns;
      Rst<='1';	
      wait for 10 ns;
		Rst<='0';
		Mode<="11";
		Pi<="11001100";
		wait for 80 ns;
wait for Clk_period*10;
      -- insert stimulus here 
wait;
   end process;
END;




test------


LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
ENTITY us_testbench IS
END us_testbench;
ARCHITECTURE behavior OF us_testbench IS 
    COMPONENT USR_3039
    PORT(
         Si : IN  std_logic;
         Pi : IN  std_logic_vector(7 downto 0);
         Mode : IN  std_logic_vector(1 downto 0);
         Rst : IN  std_logic;
         Clk : IN  std_logic;
         So : OUT  std_logic;
         Po : OUT  std_logic_vector(7 downto 0)
        );
    END COMPONENT;
   --Inputs
   signal Si : std_logic := '0';
   signal Pi : std_logic_vector(7 downto 0) := (others => '0');
   signal Mode : std_logic_vector(1 downto 0) := (others => '0');
   signal Rst : std_logic := '0';
   signal Clk : std_logic := '0';
--Outputs
   signal So : std_logic;
   signal Po : std_logic_vector(7 downto 0);
   -- Clock period definitions
   constant Clk_period : time := 10 ns;
BEGIN
	-- Instantiate the Unit Under Test (UUT)
   uut: USR_3039 PORT MAP (
          Si => Si,
          Pi => Pi,
          Mode => Mode,
          Rst => Rst,
    Clk => Clk,
          So => So,
          Po => Po);
  -- Clock process definitions
   Clk_process :process
   begin
		Clk <= '0';
		wait for Clk_period/2;
		Clk <= '1';
		wait for Clk_period/2;
   end process;
  -- Stimulus process
   stim_proc: process
   begin		
      -- hold reset state for 100 ns.
      wait for 100 ns;	
		Rst<='1';
		wait for 10 ns;
      Rst<='0';
		Mode<="00";
		Si<='1';
		wait for 10 ns;
		Rst<='0';
		Mode<="00";
		Si<='0';
		wait for 80 ns;
		Rst<='0';
		Mode<="10";
		Pi<="10101010";
		wait for 100 ns;
      Rst<='1';	
      wait for 10 ns;
		Rst<='0';
		Mode<="11";
		Pi<="11001100";
		wait for 80 ns;
wait for Clk_period*10;
      -- insert stimulus here 
wait;
   end process;
END;
