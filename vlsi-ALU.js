code-----


LIBRARY IEEE;
use IEEE.STD_LOGIC_1164.ALL;
entity USR_3039 is
Port ( Si : in STD_LOGIC;
Pi : in STD_LOGIC_VECTOR(7 downto 0);
Rst : in STD_LOGIC;
Clk : in STD_LOGIC;
Mode : in STD_LOGIC_VECTOR(1 downto 0);
So : out STD_LOGIC;
Po : out STD_LOGIC_VECTOR(7 downto 0));
end USR_3039;
architecture Behavioral of USR_3039 is
Signal temp:STD_LOGIC_VECTOR(7 downto 0);
begin
Process(Clk,Rst)
begin
if (Rst=&#39;1&#39;)then
temp&lt;=&quot;00000000&quot;;
elsif(Clk&#39;event AND clk =&#39;1&#39;) then
case mode is
when &quot;00&quot;=&gt;
temp(7)&lt;=Si;

temp(6 downto 0)&lt;= temp(7 downto 1);

So&lt;=temp(0);

when &quot;01&quot;=&gt;
temp &lt;=Pi;

temp(6 downto 0)&lt;= temp(7 downto 1);
So&lt;=temp(0);

when &quot;10&quot;=&gt;
temp(7)&lt;=Si;

temp(6 downto 0)&lt;= temp(7 downto 1);
Po &lt;=temp ;

when &quot;11&quot;=&gt;
Po&lt;=Pi;
When others =&gt;
temp&lt;=&quot;00000000&quot;;
end case;
end if;
end process;
end Behavioral;




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
