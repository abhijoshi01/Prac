code-----


library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.STD_LOGIC_Unsigned.ALL;
entity ALU_3039 is
Port ( a : in STD_LOGIC_VECTOR (3 downto 0);
b : in STD_LOGIC_VECTOR (3 downto 0);
sel : in STD_LOGIC_VECTOR (2 downto 0);
y : out STD_LOGIC_VECTOR (3 downto 0));
end ALU_3039;
architecture Behavioral of ALU_3039 is
begin
process (a,b,sel)
begin
case sel is
when &quot;000&quot;=&gt;y&lt;=a+b;
when &quot;001&quot;=&gt;y&lt;=a-b;
when &quot;010&quot;=&gt;y&lt;=a;
when &quot;011&quot;=&gt;y&lt;=a+1;
when &quot;100&quot;=&gt;y&lt;=a nand b;
when &quot;101&quot;=&gt;y&lt;=a nor b;
when &quot;110&quot;=&gt;y&lt;=a xor b;
when &quot;111&quot;=&gt;y&lt;=a or b;
when others =&gt;y&lt;=&quot;0000&quot;;
end case;
end process;
end Behavioral;




test------


LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
ENTITY ALU_test IS
END ALU_test;
ARCHITECTURE behavior OF ALU_test IS
COMPONENT ALU_3039
PORT(
a : IN std_logic_vector(3 downto 0);
b : IN std_logic_vector(3 downto 0);
sel : IN std_logic_vector(2 downto 0);
y : OUT std_logic_vector(3 downto 0)
);
END COMPONENT;
signal a : std_logic_vector(3 downto 0) := (others =&gt; &#39;0&#39;);
signal b : std_logic_vector(3 downto 0) := (others =&gt; &#39;0&#39;);

signal sel : std_logic_vector(2 downto 0) := (others =&gt; &#39;0&#39;);
signal y : std_logic_vector(3 downto 0);
BEGIN
uut: ALU_3039 PORT MAP (
a =&gt; a,
b =&gt; b,
sel =&gt; sel,
y =&gt; y
);
stim_proc: process
begin
a&lt;=&quot;0100&quot;;
b&lt;=&quot;0011&quot;;
sel&lt;=&quot;000&quot;;
wait for 100 ns; a&lt;=&quot;0100&quot;;
b&lt;=&quot;0011&quot;;
sel&lt;=&quot;001&quot;;
wait for 100 ns a&lt;=&quot;0100&quot;;
b&lt;=&quot;0011&quot;;
sel&lt;=&quot;010&quot;;
wait for 100 ns; a&lt;=&quot;0100&quot;;
b&lt;=&quot;0011&quot;;
sel&lt;=&quot;011&quot;;
wait for 100 ns; a&lt;=&quot;0100&quot;;
b&lt;=&quot;0011&quot;;
sel&lt;=&quot;100&quot;;
wait for 100 ns; a&lt;=&quot;0100&quot;;
b&lt;=&quot;0011&quot;;

sel&lt;=&quot;101&quot;;
wait for 100 ns; a&lt;=&quot;0100&quot;;
b&lt;=&quot;0011&quot;;
sel&lt;=&quot;110&quot;;
wait for 100 ns; a&lt;=&quot;0100&quot;;
b&lt;=&quot;0011&quot;;
sel&lt;=&quot;111&quot;;

wait for 100 ns;
end process;
END;
