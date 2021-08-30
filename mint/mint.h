#ifndef MINT_H
#define MINT_H
#define DEBUG 1

// printf("\n 🤬 %s | %s | line %d  \n", #test, __func__, __LINE__);

#define _assert(test)                                                                                \
	do                                                                                               \
	{                                                                                                \
		if (!(test))                                                                                 \
		{                                                                                            \
			fprintf(stdout, "\n l: %d | %s -> %d \n func: %s\n", __LINE__, #test, (test), __func__); \
			return 1;                                                                                \
		}                                                                                            \
	} while (0)
#define _run_tests(test) \
	do                   \
	{                    \
		int r = test();  \
		tests_run++;     \
		if (r)           \
			return r;    \
	} while (0)

extern int tests_run;
#endif