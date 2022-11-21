code-----



library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
entity HA_3039 is
    Port ( A : in  STD_LOGIC;
           B : in  STD_LOGIC;
           S : out  STD_LOGIC;
           C : out  STD_LOGIC);
end HA_3039;
architecture Behavioral of HA_3039 is
begin
S<= A XOR B;
C<=A AND B;
end Behavioral;









test-----



LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
 ENTITY HA_TB_3039 IS
END HA_TB_3039;
ARCHITECTURE behavior OF HA_TB_3039 IS 
    COMPONENT HA_3039
    PORT(
         A : IN  std_logic;
         B : IN  std_logic;
         S : OUT  std_logic;
         C : OUT  std_logic
        );
    END COMPONENT;
   --Inputs
   signal A : std_logic := '0';
   signal B : std_logic := '0';
 	--Outputs
   signal S : std_logic;
   signal C : std_logic;
BEGIN
	-- Instantiate the Unit Under Test (UUT)
   uut: HA_3039 PORT MAP (
          A => A,
          B => B,
          S => S,
          C => C
        );
   
-- Stimulus process
   stim_proc: process
   begin	
A<='0';
B<='0';
Wait for 100 ns;
A<='0';
B<='1';
Wait for 100 ns;
A<='1';
B<='0';
Wait for 100 ns;
A<='1';
B<='1';
Wait for 100 ns	;
      -- hold reset state for 100 ns.
 wait for 100 ns;	
  -- insert stimulus here 
      wait;
   end process;
END;
